FROM node:20

WORKDIR /user/src/app

COPY . .

RUN npm install

EXPOSE 3000

ENV SERVER=mssql_db;DATABASE_NAME=integral;PORT=1434;USER=sa;PASSWORD=C0mpl3x!Password#2024;

CMD ["npm", "run", "dev"]