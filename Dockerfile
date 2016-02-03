FROM node:4.2
MAINTAINER m-vdb

ENV MINIFY_JS=1
ENV CACHE_VERSION=`date +"%s"`

# install ruby and compass
RUN apt-get update
RUN apt-get install -y ruby-full
RUN gem install --no-rdoc --no-ri compass

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
# need to run all of this manually because of npm permissions...
RUN ./node_modules/bower/bin/bower install --allow-root
COPY . /usr/src/app
RUN ./node_modules/gulp/bin/gulp.js
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start", "--", "--production" ]
