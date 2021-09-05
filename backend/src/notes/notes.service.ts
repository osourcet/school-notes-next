import { Injectable } from '@nestjs/common';
import { GqlClientService } from 'src/gql-client/gql-client.service';
import {
    AddSharedNote,
    GetNotes,
    GetNotesQuery,
    GetReadOnlyNotes,
    GetReadOnlyNotesQuery,
} from '../gql/gql-interfaces';
import { Note } from './note';
import { NoteIncoming } from './note';
import {
    DeleteNote,
    DeleteNoteMutationVariables,
    GetLastModified,
    GetLastModifiedQuery,
} from '../gql/gql-interfaces';
import {
    RemoveSharedNote,
    AddSharedNoteMutationVariables,
    RemoveSharedNoteMutationVariables,
} from '../gql/gql-interfaces';
import {
    StopShareNote,
    StopShareNoteMutationVariables,
} from '../gql/gql-interfaces';
import {
    StartShareNote,
    StartShareNoteMutationVariables,
} from '../gql/gql-interfaces';
import {
    GetPublicNotesQuery,
    GetPublicNote,
    GetPublicNoteQuery,
} from '../gql/gql-interfaces';
import {
    CreateNoteMutationVariables,
    GetPublicNotes,
} from '../gql/gql-interfaces';
import {
    GetOwnNotes,
    GetOwnNotesQuery,
    CreateNote,
} from '../gql/gql-interfaces';

@Injectable()
export class NotesService {
    constructor(private gql: GqlClientService) {}

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

        return notes as Note[];
    }

    async getPublicNote(id: string) {
        const {
            data: {
                schoolnotes_notes: [note],
            },
        } = (await this.gql.query(GetPublicNote)) as {
            data: GetPublicNoteQuery;
        };

        if (!note) throw `No note with id ${id} found.`;

        return note as Note;
    }

    async createNote(user_id: string, note: NoteIncoming) {
        this.gql.mutate(CreateNote, {
            ...note,
            owner: user_id,
        } as CreateNoteMutationVariables);
    }

    async editNote(note_id: string) {
        return {};
    }

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

    async deleteNote(user_id: string, note_id: string) {
        await this.gql.mutate(DeleteNote, {
            id: note_id,
            userId: user_id,
        } as DeleteNoteMutationVariables);
    }
}
