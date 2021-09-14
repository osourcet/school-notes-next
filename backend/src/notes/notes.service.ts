import { Injectable } from '@nestjs/common';
import { GqlClientService } from 'src/gql-client/gql-client.service';
import { Note } from './note';
import { NoteIncoming } from './note';
import { v4 as uuid } from 'uuid';
import { GetPublicNoteQueryVariables } from '../gql/gql-interfaces';
import {
    AddSharedNote,
    CreateNoteMutation,
    GetNotes,
    GetNotesQuery,
    GetReadOnlyNotes,
    GetReadOnlyNotesQuery,
    DeleteNote,
    DeleteNoteMutationVariables,
    GetLastModified,
    GetLastModifiedQuery,
    RemoveSharedNote,
    AddSharedNoteMutationVariables,
    RemoveSharedNoteMutationVariables,
    StopShareNote,
    StopShareNoteMutationVariables,
    StartShareNote,
    StartShareNoteMutationVariables,
    GetPublicNotesQuery,
    GetPublicNote,
    GetPublicNoteQuery,
    CreateNoteMutationVariables,
    GetPublicNotes,
    GetOwnNotes,
    GetOwnNotesQuery,
    CreateNote,
    GetNote,
    GetNoteQuery,
    GetNoteQueryVariables,
    UpdateNote,
    UpdateNoteMutationVariables,
    UpdateNoteMutation,
} from '../gql/gql-interfaces';

@Injectable()
export class NotesService {
    constructor(public gql: GqlClientService) {}

    //#region Get Notes

    async getNotes(user_id: string) {
        const {
            data: {
                schoolnotes_notes: notes_db,
                schoolnotes_read_only_notes: readonlyNotes_db,
            },
        } = (await this.gql.query(GetNotes, { id: user_id })) as {
            data: GetNotesQuery;
        };

        const notes: Note[] = [];
        const readonlyNotes: Note[] = [];

        notes_db.forEach((n) => {
            const { __typename, id, ...note } = n;
            notes.push({ id: id as string, ...note, readonly: false });
        });

        readonlyNotes_db.forEach((n) => {
            const {
                note: { __typename, id, ...note },
            } = n;
            readonlyNotes.push({ id: id as string, ...note, readonly: true });
        });

        return { own: notes, readonly: readonlyNotes };
    }

    async getNote(note_id: string, user_id: string): Promise<Note> {
        const {
            data: {
                schoolnotes_notes: [note_db],
            },
        } = (await this.gql.query(GetNote, {
            id: note_id,
            user_id: user_id,
        } as GetNoteQueryVariables)) as {
            data: GetNoteQuery;
        };

        if (!note_db) throw `No note with id ${note_id} found.`;

        const { __typename, id, ...note } = note_db;

        return { id: id as string, ...note, readonly: false };
    }

    async getOwnNotes(user_id: string) {
        const {
            data: { schoolnotes_notes: notes_db },
        } = (await this.gql.query(GetOwnNotes, { id: user_id })) as {
            data: GetOwnNotesQuery;
        };

        const notes: Note[] = [];

        notes_db.forEach((n) => {
            const { __typename, id, ...note } = n;
            notes.push({ id: id as string, ...note, readonly: false });
        });

        return notes;
    }

    async getReadOnlyNotes(user_id: string) {
        const {
            data: { schoolnotes_read_only_notes: readonlyNotes_db },
        } = (await this.gql.query(GetReadOnlyNotes, { id: user_id })) as {
            data: GetReadOnlyNotesQuery;
        };
        const readonlyNotes: Note[] = [];

        readonlyNotes_db.forEach((n) => {
            const {
                note: { __typename, id, ...note },
            } = n;
            readonlyNotes.push({ id: id as string, ...note, readonly: true });
        });

        return readonlyNotes;
    }

    async getLastModified(user_id: string): Promise<string> {
        const {
            data: {
                schoolnotes_notes: [own],
                schoolnotes_read_only_notes: [readonly],
            },
        } = (await this.gql.query(GetLastModified, { id: user_id })) as {
            data: GetLastModifiedQuery;
        };

        console.log(own, readonly);

        if (own === undefined && readonly === undefined)
            return new Date('2000').toISOString();
        if (own === undefined) return readonly.note.last_modified;
        if (readonly === undefined) return own.last_modified;

        if (new Date(readonly.note.last_modified) > new Date(own.last_modified))
            return readonly.note.last_modified;
        return own.last_modified;
    }

    async getPublicNotes() {
        const {
            data: { schoolnotes_notes: notes },
        } = (await this.gql.query(GetPublicNotes)) as {
            data: GetPublicNotesQuery;
        };

        const readonlyNotes: Note[] = [];

        notes.forEach((n) => {
            const { __typename, id, ...note } = n;
            readonlyNotes.push({ id: id as string, ...note, readonly: true });
        });

        return readonlyNotes;
    }

    async getPublicNote(id: string) {
        const {
            data: {
                schoolnotes_notes: [note_db],
            },
        } = (await this.gql.query(GetPublicNote, {
            id,
        } as GetPublicNoteQueryVariables)) as {
            data: GetPublicNoteQuery;
        };

        if (!note_db) throw `No note with id ${id} found.`;

        const { __typename, id: _, ...note } = note_db;

        return { id: id as string, ...note, readonly: true };
    }

    //#endregion

    //#region create & edit Notes

    async createNote(
        user_id: string,
        note: NoteIncoming & { last_modified?: string; id?: string },
    ) {
        const {
            data: {
                insert_schoolnotes_notes_one: { id },
            },
        } = (await this.gql.mutate(CreateNote, {
            id: note.id ? note.id : uuid(),
            title: note.title,
            important: note.important,
            subject: note.subject,
            date: note.date,
            content: note.content,
            done: note.done,
            owner: user_id,
            last_modified: note.last_modified
                ? note.last_modified
                : new Date().toISOString(),
        } as CreateNoteMutationVariables)) as { data: CreateNoteMutation };

        return id;
    }

    async editNote(noteId: string, userId: string, noteProperties: any) {
        console.log(noteId, userId, noteProperties);

        const {
            data: {
                update_schoolnotes_notes: { affected_rows: updated },
            },
        } = (await this.gql.mutate(UpdateNote, {
            id: noteId,
            userId,
            set: {
                title: noteProperties.title,
                subject: noteProperties.subject,
                date: noteProperties.date,
                content: noteProperties.content,
                done: noteProperties.done,
                last_modified: new Date().toISOString(),
            },
        } as UpdateNoteMutationVariables)) as { data: UpdateNoteMutation };

        return updated == 0 ? null : noteId;
    }

    async updateAllNotes(
        userId: string,
        notesClient: Array<
            (NoteIncoming & { last_modified: string; id: any }) | Note
        >,
    ) {
        const notesServer = await this.getOwnNotes(userId);

        const notesMustCreate: Array<
            (NoteIncoming & { last_modified: string; id: any }) | Note
        > = [];

        const notesMustEdit: Array<
            (NoteIncoming & { last_modified: string; id: any }) | Note
        > = [];

        const getNoteById: (
            array: (
                | Note
                | (NoteIncoming & {
                      last_modified: string;
                      id: any;
                  })
            )[],
            id: string,
        ) =>
            | Note
            | (NoteIncoming & {
                  last_modified: string;
                  id: any;
              }) = (array, id) => array.filter((note) => note.id === id)[0];

        const checkNote = (
            noteClient:
                | (NoteIncoming & { last_modified: string; id: any })
                | Note,
            noteServer:
                | (NoteIncoming & { last_modified: string; id: any })
                | Note,
        ) => {
            if (
                new Date(noteClient.last_modified) >
                new Date(noteServer.last_modified)
            )
                return true;
            return false;
        };

        const checkNotes = async () => {
            for await (const note of notesClient) {
                const noteServer = getNoteById(notesServer, note.id);

                if (noteServer === undefined) {
                    notesMustCreate.push(note);
                    continue;
                }
                if (checkNote(note, noteServer)) notesMustEdit.push(note);
            }
        };

        await checkNotes();
        const ids: string[] = await Promise.all([
            ...notesMustCreate.map<Promise<any>>(
                ({
                    id,
                    last_modified,
                    title,
                    important,
                    subject,
                    date,
                    content,
                    done,
                }) =>
                    this.createNote(userId, {
                        id,
                        last_modified,
                        title,
                        important,
                        subject,
                        date,
                        content,
                        done,
                    }),
            ),

            ...notesMustEdit.map<Promise<any>>(
                ({ id, title, important, subject, date, content, done }) =>
                    this.editNote(id, userId, {
                        title,
                        important,
                        subject,
                        date,
                        content,
                        done,
                    }),
            ),
        ]);

        return ids;
    }

    //#endregion

    //#region share Notes

    async startShareNote(user_id: string, note_id: string) {
        await this.gql.mutate(StartShareNote, {
            id: note_id,
            userId: user_id,
        } as StartShareNoteMutationVariables);
    }

    async stopShareNote(user_id: string, note_id: string) {
        await this.gql.mutate(StopShareNote, {
            id: note_id,
            userId: user_id,
        } as StopShareNoteMutationVariables);
    }

    async addSharedNote(user_id: string, note_id: string) {
        await this.gql.mutate(AddSharedNote, {
            id: note_id,
            userId: user_id,
        } as AddSharedNoteMutationVariables);
    }

    async removeSharedNote(user_id: string, note_id: string) {
        await this.gql.mutate(RemoveSharedNote, {
            id: note_id,
            userId: user_id,
        } as RemoveSharedNoteMutationVariables);
    }

    //#endregion

    //#region delete Notes

    async deleteNote(user_id: string, note_id: string) {
        await this.gql.mutate(DeleteNote, {
            id: note_id,
            userId: user_id,
        } as DeleteNoteMutationVariables);
    }

    //#endregion
}
