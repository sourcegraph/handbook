FROM node:latest@sha256:8d9887b3b05d2e65598a18616c37cfc271346d12248dfcbeadd7b7bf4da1e827

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
