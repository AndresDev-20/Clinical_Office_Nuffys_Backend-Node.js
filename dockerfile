FROM node:20

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN apt-get update && apt-get install -y netcat-openbsd

EXPOSE 8080

CMD ["sh", "wait-for-db.sh"]