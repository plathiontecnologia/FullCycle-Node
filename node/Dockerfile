FROM node:22 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:22-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app /usr/src/
COPY package*.json ./
RUN npm install --only=production

ENV DOCKERIZE_VERSION v0.9.3
RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget