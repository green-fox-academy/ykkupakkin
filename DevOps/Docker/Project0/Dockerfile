FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
CMD node index.js
EXPOSE 8081