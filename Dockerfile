FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN npm install
npm run build
npm install pm2 -g
pm2 start ./dist/main.js --name api-teste
pm2 status