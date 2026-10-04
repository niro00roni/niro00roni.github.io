FROM node:24.13-alpine
WORKDIR /usr/src/app
RUN apk update && apk upgrade && apk add --no-cache bash
RUN npm install -g npm@11
ENV HOST 0.0.0.0