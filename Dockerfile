FROM node:latest@sha256:1fab548e95c779df229e4b50d8d20e222597bda15aeece508098c5ba7723302e

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
