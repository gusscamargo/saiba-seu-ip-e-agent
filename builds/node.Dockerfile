FROM node:16

WORKDIR /usr/app

RUN npm i -g -y nodemon

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]