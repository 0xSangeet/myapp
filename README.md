# myapp

an express.js application that i used to explore github actions and build a basic ci/cd pipeline.

## what i did
- containerized the app using docker and docker compose
- used vagrant to spin up a vm and ssh'd into it.
- served the application using nginx.
- setup local https using mkcert.
- pused image to docker hub
- installed github actions self-hosted runner on the vm
- wrote a ci/cd workflow that on every push to the main branch
	- builds and pushes a new docker image to docker hub
	- pulls and redeploys the new image on the vm automatically

## tech stack
    | tool | purpose |
    |------|---------|
    | docker | containerization |
    | docker compose | ulti-container orchestration |
    | nginx | reverse proxy |
    | mkcert | local HTTPS |
    | vagrant + virtualbox | vm (mock vps) |
    | github actions | ci/cd pipeline |
    | docker hub | image registry |
