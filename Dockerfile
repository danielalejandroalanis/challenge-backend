FROM node:16

WORKDIR /core

COPY package.json .

RUN npm install
RUN npm install pm2 -g

CMD pm2 start process.yml && tail -f /dev/null

EXPOSE 3000