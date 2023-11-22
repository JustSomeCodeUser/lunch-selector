#!/bin/bash
set -e

IMAGE_NAME="lunch-selector"
docker build -t $IMAGE_NAME .
docker run -d -p 80:80 --name my-angular-app $IMAGE_NAME
