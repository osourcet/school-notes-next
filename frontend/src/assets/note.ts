interface NoteIncoming {
    title: string;
    important: boolean;
    subject: string;
    date: string;
    content: string;
    done: boolean;
}

interface Note {
    id: string;
    public: boolean;
    readonly: boolean;
    last_modified: string;
    owner: string;
    title: string;
    important: boolean;
    subject: string;
    date: string;
    content: string;
    done: boolean;
}
