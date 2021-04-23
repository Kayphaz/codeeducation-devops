FROM node:alpine

WORKDIR /usr/src/app

RUN apk update && apk add --no-cache wget openssl

COPY package.json .

RUN npm install

CMD [ "npx", "nodemon", "./app/index.js" ]

COPY . .