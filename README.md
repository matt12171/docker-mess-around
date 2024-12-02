# Messing around in docker town

The best way to get familiar with docker is to build stuff with it, and then modify it to do what you want.

## Local dev (the typescript code)

You can get up and running quickly with this via:

```sh
npm i
```

and then

```sh
npm start
```

and you'll have a server listening on port 3000.

## Running in docker compose

If you want to test out your server interaction with the database, you can start just the database container via:

```sh
docker compose up db
```

and the database will start up and be listening on port 5432.

## Running both backend containers queried by a frontend (eg, React)

You can run a frontend React app that connects to the backend server (which then queries the database) by running `npm start` or whatever the command will be if/when a frontend application is added here (not done yet). But first, you'll need the other two containers running, which can be achieved via:

```sh
docker compose up --build
```

and then the frontend should be able to call out to localhost:3000 (though be careful to set different exposed ports if you have backend and frontend services running).