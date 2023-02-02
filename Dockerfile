FROM node:latest@sha256:a50310c1e62348b1c89fa398e95f867211df3cb3440e8618165f95f3dc3f06a3

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
