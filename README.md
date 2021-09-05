# School-Notes

[👉Template](https://github.com/felix-07-11/vueJS-vuetify-nestJS)

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

| Method | Path                     | Body                                                   | Http status code | Returns            |
| ------ | ------------------------ | ------------------------------------------------------ | ---------------- | ------------------ |
| GET    | /                        |                                                        | 200; 404         | frontend (VueJS)   |
| POST   | /api/user/register       | { username: string; email: string; password: string; } | 201; 403         |                    |
| POST   | /api/user/login          | { username: string; password: string; }                | 308              |                    |
| POST   | /api/auth/login          | { username: string; password: string; }                | 200; 403         | { token: string; } |
| POST   | /api/user/changepassword | { old: string; new:string }                            | 200; 403         |                    |

<!-- | POST   | /api/user/resetpassword  | { token: string; password: string; }                   | 200; 403         |                    | -->
<!-- | DELETE | /api/user                |                                                        | 200; 403         |                    | -->
