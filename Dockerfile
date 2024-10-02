FROM node:20

WORKDIR /user/src/app

COPY .ENV.EXAMPLE .ENV

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]