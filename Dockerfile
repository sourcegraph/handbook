FROM node:latest@sha256:6b3f9aa7eefa8d4c93d43914e78aa2bfea9a12808b0059e5da78854dfa8b8768

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
