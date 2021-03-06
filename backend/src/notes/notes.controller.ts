import {
    Body,
    Controller,
    Delete,
    Get,
    Header,
    HttpStatus,
    Param,
    Put,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { NotesService } from './notes.service';
import { Note, NoteIncoming } from './note';
import { Response } from 'express';
import { NotesGateway } from './notes.gateway';
import { GetReadOnlyNoteUser } from 'src/gql/gql-interfaces';
import {
    GetReadOnlyNoteUserQueryVariables,
    GetReadOnlyNoteUserQuery,
} from '../gql/gql-interfaces';

@Controller('api/notes')
export class NotesController {
    constructor(
        private notesService: NotesService,
        private notesGateway: NotesGateway,
    ) {}

    //#region GET

    @UseGuards(JwtAuthGuard)
    @Get()
    async getNotes(@Req() req: { user: { id: string } }) {
        return await this.notesService.getNotes(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('own')
    async getOwnNotes(@Req() req: { user: { id: string } }) {
        return await this.notesService.getOwnNotes(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('own/:id')
    async getNote(
        @Param('id') id: string,
        @Req() req: { user: { id: string } },
        @Res() res: Response,
    ) {
        try {
            res.json(await this.notesService.getNote(id, req.user.id));
        } catch (error) {
            res.status(HttpStatus.NOT_FOUND).json({ error });
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('pdf/:id')
    @Header('Content-type', 'application/pdf')
    async getNoteAsPDF(
        @Param('id') id: string,
        @Req() req: { user: { id: string } },
        @Res() res: Response,
    ) {
        try {
            res.send(await this.notesService.getNoteAsPDF(id, req.user.id));
        } catch (error) {
            console.log(error);

            res.status(HttpStatus.NOT_FOUND).json({ error });
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('readonly')
    async getReadOnlyNotes(@Req() req: { user: { id: string } }) {
        return await this.notesService.getReadOnlyNotes(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('lastmodified')
    async lastModified(@Req() req: { user: { id: string } }) {
        return {
            lastmodified: await this.notesService.getLastModified(req.user.id),
        };
    }

    @Get('public')
    async getPublicNotes() {
        return await this.notesService.getPublicNotes();
    }

    @Get('public/:id')
    async getPublicNote(@Param('id') id: string, @Res() res: Response) {
        try {
            res.json(await this.notesService.getPublicNote(id));
        } catch (error) {
            res.status(HttpStatus.NOT_FOUND).json({ error });
        }
    }

    //#endregion

    //#region PUT

    @UseGuards(JwtAuthGuard)
    @Put()
    async updateAllNotes(
        @Req() req: { user: { id: string } },
        @Body()
        notes: ((NoteIncoming & { last_modified: string; id: any }) | Note)[],
        @Res() res: Response,
    ) {
        console.log(notes);

        res.sendStatus(HttpStatus.OK);

        try {
            const ids = await this.notesService.updateAllNotes(
                req.user.id,
                notes,
            );
            this.notesGateway.server.to(req.user.id).emit('notes:changed');

            ids.forEach(async (id) => {
                const {
                    data: { schoolnotes_read_only_notes: user },
                } = (await this.notesService.gql.query(GetReadOnlyNoteUser, {
                    id,
                } as GetReadOnlyNoteUserQueryVariables)) as {
                    data: GetReadOnlyNoteUserQuery;
                };

                user.forEach(({ user_id }) =>
                    this.notesGateway.server
                        .to(user_id)
                        .emit('note-readonly:changed', id),
                );
            });
        } catch (error) {
            console.log(error);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('create')
    async createNotes(
        @Req() req: { user: { id: string } },
        @Body() note: NoteIncoming,
        @Res() res: Response,
    ) {
        console.log(note);

        try {
            const id = await this.notesService.createNote(req.user.id, note);
            this.notesGateway.server.to(req.user.id).emit('note:created', id);
            res.sendStatus(HttpStatus.CREATED);
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('public/:id')
    async startShareNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
    ) {
        await this.notesService.startShareNote(req.user.id, id);
        this.notesGateway.server.to(req.user.id).emit('note:changed', id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('private/:id')
    async stopShareNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
    ) {
        const {
            data: { schoolnotes_read_only_notes: user },
        } = (await this.notesService.gql.query(GetReadOnlyNoteUser, {
            id,
        } as GetReadOnlyNoteUserQueryVariables)) as {
            data: GetReadOnlyNoteUserQuery;
        };

        user.forEach(({ user_id }) =>
            this.notesGateway.server
                .to(user_id)
                .emit('note-readonly:unsubscribed', id),
        );

        await this.notesService.stopShareNote(req.user.id, id);
        this.notesGateway.server.to(req.user.id).emit('note:changed', id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('subscribe/:id')
    async addSharedNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
    ) {
        await this.notesService.addSharedNote(req.user.id, id);
        this.notesGateway.server
            .to(req.user.id)
            .emit('note-readonly:subscribed', id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('unsubscribe/:id')
    async removeSharedNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
    ) {
        await this.notesService.removeSharedNote(req.user.id, id);
        this.notesGateway.server
            .to(req.user.id)
            .emit('note-readonly:unsubscribed', id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('edit/:id')
    async editNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
        @Body() note: NoteIncoming,
        @Res() res: Response,
    ) {
        const updated = await this.notesService.editNote(id, req.user.id, note);

        if (updated == null) return res.sendStatus(HttpStatus.NOT_FOUND);

        this.notesGateway.server.to(req.user.id).emit('note:changed', id);

        const {
            data: { schoolnotes_read_only_notes: user },
        } = (await this.notesService.gql.query(GetReadOnlyNoteUser, {
            id,
        } as GetReadOnlyNoteUserQueryVariables)) as {
            data: GetReadOnlyNoteUserQuery;
        };

        user.forEach(({ user_id }) =>
            this.notesGateway.server
                .to(user_id)
                .emit('note-readonly:changed', id),
        );

        res.sendStatus(HttpStatus.OK);
    }

    @UseGuards(JwtAuthGuard)
    @Put('edit/:id/:property')
    async editNoteProperty(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
        @Param('property') property: string,
        @Body('value') value: any,
        @Res() res: Response,
    ) {
        if (
            ![
                'title',
                'important',
                'subject',
                'date',
                'content',
                'done',
            ].includes(property)
        )
            return res.sendStatus(HttpStatus.BAD_REQUEST);

        const updated = await this.notesService.editNote(id, req.user.id, {
            [property]: value,
        });

        if (updated == null) return res.sendStatus(HttpStatus.NOT_FOUND);

        this.notesGateway.server.to(req.user.id).emit('note:changed', id);

        const {
            data: { schoolnotes_read_only_notes: user },
        } = (await this.notesService.gql.query(GetReadOnlyNoteUser, {
            id,
        } as GetReadOnlyNoteUserQueryVariables)) as {
            data: GetReadOnlyNoteUserQuery;
        };

        console.log(user);

        user.forEach(({ user_id }) =>
            this.notesGateway.server
                .to(user_id)
                .emit('note-readonly:changed', id),
        );

        res.sendStatus(HttpStatus.OK);
    }

    //#endregion

    //#region DELETE

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    @Put('delete/:id')
    async deleteNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
    ) {
        const {
            data: { schoolnotes_read_only_notes: user },
        } = (await this.notesService.gql.query(GetReadOnlyNoteUser, {
            id,
        } as GetReadOnlyNoteUserQueryVariables)) as {
            data: GetReadOnlyNoteUserQuery;
        };

        console.log(user);

        user.forEach(({ user_id }) =>
            this.notesGateway.server
                .to(user_id)
                .emit('note-readonly:unsubscribed', id),
        );

        await this.notesService.deleteNote(req.user.id, id);
        this.notesGateway.server.to(req.user.id).emit('note:deleted', id);
    }

    //#endregion
}
