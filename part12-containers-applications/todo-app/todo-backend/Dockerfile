FROM node:14.18-alpine3.14
WORKDIR /usr/src/app
COPY package*.json ./
COPY --chown=node:node . ./usr/src/app/*
RUN npm ci
USER node
ENV DEBUG=playground:*
ENV PORT=3000
COPY . .
EXPOSE 3000
CMD npm start