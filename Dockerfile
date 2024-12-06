FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g typescript

RUN tsc

EXPOSE 3000

# Command to run the application
CMD ["node", "dist/index.js"]

