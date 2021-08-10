RUN npm init -y
RUN npm install --save telegraf
RUN mkdir /app/
WORKDIR /app/
COPY . /app/
CMD node bot.js
