FROM node:latest@sha256:64b71834718b859ea389790ae56e5f2f8fa9456bf3821ff75fa28a87a09cbc09

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
