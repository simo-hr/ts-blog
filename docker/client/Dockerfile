FROM node:14.18.1-alpine
RUN mkdir -p /var/www/client

WORKDIR /var/www/client
COPY ./client /var/www/client/

RUN apk update

EXPOSE 3000