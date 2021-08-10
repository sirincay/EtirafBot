FROM debian:latest
RUN docker pull node
COPY . .
CMD node bot.js
