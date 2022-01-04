FROM node:latest@sha256:36aca218a5eb57cb23bc790a030591382c7664c15a384e2ddc2075761ac7e701

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
