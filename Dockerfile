FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g typescript

RUN tsc

RUN apk update && apk add --no-cache postgresql-client

COPY docker-entrypoint.sh /usr/src/app/docker-entrypoint.sh

RUN chmod +x /usr/src/app/docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]

# Command to run the application
CMD ["node", "dist/index.js"]