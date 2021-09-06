# School-Notes

[👉Template](https://github.com/felix-07-11/TS-vueJS-vuetify-nestJS)

## Useage

```sh
git clone https://github.com/osourcet/school-notes-next.git

cd school-notes-next/

sh production.sh

docker run --name schoolnotes -p 8080:3000 --env-file .env school-notes-next:latest # App run on port 8080
```

## Needed environment variables

-   SECRET: JWT secret key
-   EXPIRES_IN_SECONDS: how long the JWT is valid
-   GQL_API_URL and GQL_API_KEY: if you want use a GraphQL Database

## REST API Endpoints

| Method | Path                          | Authentication required | Body                                                     | Http status code   | Returns                              |
| ------ | ----------------------------- | :---------------------: | -------------------------------------------------------- | ------------------ | ------------------------------------ |
| GET    | /                             |           ❌            |                                                          | 200; 404           | frontend (VueJS)                     |
|        |                               |                         |                                                          |                    |                                      |
| POST   | /api/user/register            |           ❌            | `{ username: string; email: string; password: string; }` | 201; 403           |                                      |
| POST   | /api/user/login               |           ❌            | `{ username: string; password: string; }`                | 308                |                                      |
| POST   | /api/auth/login               |           ❌            | `{ username: string; password: string; }`                | 200; 403           | `{ token: string; }`                 |
| POST   | ~~/api/user/changepassword~~  |           ✅            | `{ old: string; new: string; }`                          | 200; 401           |                                      |
| POST   | ~~/api/user/resetpassword~~   |           ❌            | `{ token: string; password: string; }`                   | 200; 403           |                                      |
| DELETE | ~~/api/user~~                 |           ❌            |                                                          | 200; 403           |                                      |
|        |                               |                         |                                                          |                    |                                      |
| GET    | /api/notes                    |           ✅            |                                                          | 200; 401           | `{ own: Note[]; readonly: Note[]; }` |
| GET    | /api/notes/:id                |           ✅            |                                                          | 200; 401; 404      | `Note`                               |
| GET    | /api/notes/public             |           ❌            |                                                          | 200                | `Note[]`                             |
| GET    | /api/notes/public/:id         |           ❌            |                                                          | 200; 404           | `Note`                               |
| PUT    | /api/notes/create             |           ✅            | `NoteIncoming`                                           | 201; 401           |                                      |
| PUT    | /api/notes/                   |           ✅            | `NoteIncoming`                                           | 201; 401           |                                      |
| PUT    | /api/notes/public/:id         |           ✅            |                                                          | 200; 401           |                                      |
| PUT    | /api/notes/private/:id        |           ✅            |                                                          | 200; 401           |                                      |
| PUT    | /api/notes/add/:id            |           ✅            |                                                          | 200; 401           |                                      |
| PUT    | /api/notes/remove/:id         |           ✅            |                                                          | 200; 401           |                                      |
| PUT    | /api/notes/edit/:id           |           ✅            | `NoteIncoming`                                           | 200; 401; 404      |                                      |
| PUT    | /api/notes/edit/:id/:property |           ✅            | `{ value: any }`                                         | 200; 400; 401; 404 |                                      |
| DELETE | /api/notes/delete/:id         |           ✅            |                                                          | 200; 401           |                                      |
| DELETE | /api/notes/:id                |           ✅            |                                                          | 200; 401           |                                      |

## SocketIO LiveSync Events

| Event                   | Description                                        | Payload      |
| ----------------------- | -------------------------------------------------- | ------------ |
| `notes:changed`         | will be emited if the notes of a user was uploaded |              |
| `note:changed`          | will be emited if a note was created or edited     | `id: string` |
| `note:deleted`          | will be emited if a note was deleted               | `id: string` |
|                         |                                                    |              |
| `note-readonly:changed` | will be emited if a readonly note was edited       | `id: string` |

## TypeScript Interfaces

```ts
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
```
