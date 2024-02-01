FROM node:latest@sha256:58b34ac1370a11c2c580ffa91f3236a92eaa6021ab186c361ca78d2b36a4cb24

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
