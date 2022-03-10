FROM node:8
WORKDIR /usr/src/app
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]