FROM node:lts-alpine

HEALTHCHECK --interval=30s --timeout=10s CMD wget -qO- "localhost:3000"

WORKDIR /app

COPY package.json ./
RUN npm i

COPY ./src ./src
COPY ./public ./public

COPY ./.env ./
COPY ./next.config.js ./


RUN npm run build

CMD ["npm", "run", "start"]
