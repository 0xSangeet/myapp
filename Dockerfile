FROM node:lts-trixie-slim

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "index.js"]
