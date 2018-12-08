FROM node:8.14.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./server.js ./package.json /usr/src/app/
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
