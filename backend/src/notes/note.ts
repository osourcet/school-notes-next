export interface NoteIncoming {
    title: string;
    important: boolean;
    subject: string;
    date: string;
    content: string;
    done: boolean;
}

export interface Note {
    id: string;
    public?: boolean;
    readonly: boolean;
    last_modified: string;
    title: string;
    important: boolean;
    subject: string;
    date: string;
    content: string;
    done: boolean;
}
