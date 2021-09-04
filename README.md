# vueJS-vuetify-nestJS

Template with frontend and backend for Linux/Unix + Docker

## Requires (tested)

-   nodejs@14.17.4 or higher
-   yarn@1.22.11 or higher
-   @vue/cli@4.5.13 or higher
-   nest@8.1.0 or higher

**Test and Build**

-   docker@20.10.8 or higher
-   bash@5.0.17(1)-release or higher

## Frontend (Vue2 + Vuetify)

```sh
# open the frontend folder
cd frontend

# test only forntend
yarn serve
```

### environment variables

VUE_APP_API_URL: Api url in development mode (you must set yourself)
VUE_APP_VERSION: Version from package.json

### connection to backend

In the Vuex store is a axios instance preconfigured with the VUE_APP_API_URL or `${protocol}//${hostname}/api/` in production mode

## Backend (NestJS + GarphQL Client + basic auth service)

```sh
# open the backend folder
cd backend

# test only backend
yarn start:dev
```

### Authentication

You must define a method which validate the user who is trying to login. (/backend/src/auth/auth.service.ts)

You can define user methods (register, reset password, change password, ...) in the user service / controller. (/backend/src/user)

The pre-configured Auth Module needs 2 environment variables: SECRET (Json Web Token Secret) and EXPIRES_IN_SECONDS (How long the JWT is valid in seconds)

### GarphQL client

You can use the GarphQL Client if you use a Database which supports GrapthQL (eg. Hasura).

The GarphQL service needs 2 environment variables: GQL_API_URL (URL to GQL Endpoint of an server) and GQL_API_KEY (Authorization)

## Test

```sh
sh test.sh # Test runs at Port 8080

# or

sh test.sh 5000 # Test runs at Port 5000
```

If the docker container needs environment variables, you can create .env in the root folder of this project. This .env file will be loaded.

## Production Build

```sh
sh production.sh
```

An dockerimage is build with the name PROJECTNAME:latest and the dockerimage is saved as PROJECTNAME_dockerimage.tar in root folder of this project.
