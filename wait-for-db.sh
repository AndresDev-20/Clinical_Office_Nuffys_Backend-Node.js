#!/bin/sh

echo "Esperando a MySQL..."

while ! nc -z db 3306; do
  sleep 1
done

echo "MySQL listo!"

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm run dev