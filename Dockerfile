FROM alpine:latest

RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY /server .

RUN npm install

EXPOSE 5000

CMD [ "node", "index.js" ]