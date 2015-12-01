FROM node:4.2
MAINTAINER m-vdb

# install ruby and compass
RUN apt-get update
RUN apt-get install -y ruby-full
RUN gem install --no-rdoc --no-ri compass

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install .

CMD [ "npm", "start" ]

EXPOSE 8080
