FROM node:lts
RUN mkdir /puskas
WORKDIR /puskas
COPY . .
RUN npm i
