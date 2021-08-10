FROM node:12-slim

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install --production

RUN npm install --save telegraf

COPY . .

CMD ["bash","start.sh"]
