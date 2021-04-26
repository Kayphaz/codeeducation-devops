FROM node:alpine

WORKDIR /usr/src/app

RUN apk update && apk add --no-cache wget openssl

COPY package.json .

RUN npm install

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . .

ENTRYPOINT [ "dockerize", "-wait", "tcp://db:3306", "-timeout", "20s", "npx", "nodemon", "./app/index.js" ]