FROM node:latest@sha256:242d81ad2a91353ac3a5ed3598582acb4a9a7761b16c60524b949a1603707848

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
