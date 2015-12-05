FROM node:4.2
MAINTAINER m-vdb

ENV MINIFY_JS=1

# install ruby and compass
RUN apt-get update
RUN apt-get install -y ruby-full
RUN gem install --no-rdoc --no-ri compass

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN cd /usr/src/app; npm install .

EXPOSE 8080
CMD [ "npm", "start", "--", "--production" ]
