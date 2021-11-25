FROM node:13.12.0-alpine as build

WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build


FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
