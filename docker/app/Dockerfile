FROM node:14.15.3-alpine
WORKDIR /node

RUN apk update && apk add bash

COPY package*.json ./

RUN yarn install

EXPOSE 18080

CMD  yarn run build && yarn run start