FROM node:latest@sha256:cbd62dc7ba7e50d01520f2c0a8d9853ec872187fa806ed61d0f87081c220386d

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
