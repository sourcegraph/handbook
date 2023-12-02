FROM node:latest@sha256:04300613a87512b58a0555a122f35b2fb7a7dd528b6435e87b0d34b67f53a86a

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
