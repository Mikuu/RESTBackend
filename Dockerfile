FROM node:21-alpine

WORKDIR /usr/src/app

COPY . .
RUN npm install

#ENV REST_DB_USERNAME=ariman
#ENV REST_DB_PASSWORD=Password1

EXPOSE 3128

CMD ["npm", "run", "dev"]
