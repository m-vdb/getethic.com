#!/usr/bin/env bash

# run docker container
docker run --name getethic.com -d -p 9090:8080 -t mvdb/getethic.com:dev
