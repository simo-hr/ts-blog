FROM node:14.18.1-alpine
RUN mkdir -p /var/www/api

WORKDIR /var/www/api
COPY ./api /var/www/api/

RUN apk update && \
    apk add bash

EXPOSE 18080
