FROM node:4.2
MAINTAINER m-vdb

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install -g bower gulp
RUN npm install .

CMD [ "npm", "start" ]

EXPOSE 8080
