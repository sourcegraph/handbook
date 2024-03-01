FROM node:latest@sha256:65998e325b06014d4f1417a8a6afb1540d1ac66521cca76f2221a6953947f9ee

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
