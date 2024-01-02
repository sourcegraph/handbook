FROM node:latest@sha256:73a9c498369c6e6f864359979c8f4895f28323c07411605e6c870d696a0143fa

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app

RUN chown -R node:node /app
WORKDIR /app
USER node
