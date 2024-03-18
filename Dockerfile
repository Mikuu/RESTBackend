FROM node:21-alpine

WORKDIR /usr/src/app

COPY . .
RUN rm -rf node_modules && npm install

EXPOSE 3128

CMD ["npm", "run", "dev"]
