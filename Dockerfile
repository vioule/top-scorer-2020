  
# syntax=docker/dockerfile:experimental
FROM node:lts

# Download public key for github.com
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

# Clone private repository
RUN --mount=type=ssh git clone git@github.com:vioule/top-scorer-2020.git

# Install dependencies
WORKDIR /top-scorer-2020
RUN npm i
