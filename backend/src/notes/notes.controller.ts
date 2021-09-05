import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Put,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { NotesService } from './notes.service';
import { NoteIncoming } from './note';
import { Response } from 'express';
import { NotesGateway } from './notes.gateway';

@Controller('api/notes')
export class NotesController {
    constructor(
        private notesService: NotesService,
        private notesGateway: NotesGateway,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getNotes(@Req() req: { user: { id: string } }) {
        return await this.notesService.getNotes(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('lastmodified')
    async lastModified(@Req() req: { user: { id: string } }) {
        return await this.notesService.getLastModified(req.user.id);
    }

    @Get('public')
    async getPublicNotes() {
        return await this.notesService.getPublicNotes();
    }

    @Get('public/:id')
    async getPublicNote(@Param('id') id: string, @Res() res: Response) {
        return await this.notesService
            .getPublicNote(id)
            .catch((error) => res.status(HttpStatus.NOT_FOUND).json({ error }));
    }

    @UseGuards(JwtAuthGuard)
    @Put(['', 'create'])
    async createNotes(
        @Req() req: { user: { id: string } },
        @Body() note: NoteIncoming,
    ) {
        await this.notesService.createNote(req.user.id, note);
    }

    @UseGuards(JwtAuthGuard)
    @Put('public/:id')
    async startShareNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
    ) {
        await this.notesService.startShareNote(req.user.id, id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('private/:id')
    async stopShareNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
    ) {
        await this.notesService.stopShareNote(req.user.id, id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('add/:id')
    async addSharedNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
    ) {
        await this.notesService.addSharedNote(req.user.id, id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('remove/:id')
    async removeSharedNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
    ) {
        await this.notesService.removeSharedNote(req.user.id, id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete([':id', 'delete/:id'])
    async deleteNote(
        @Req() req: { user: { id: string } },
        @Param('id') id: string,
    ) {
        await this.notesService.deleteNote(req.user.id, id);
    }
}
