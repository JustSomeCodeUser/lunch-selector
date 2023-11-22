@echo off

SET IMAGE_NAME=lunch-selector
docker build -t %IMAGE_NAME% .
docker run -d -p 4242:80 %IMAGE_NAME%
