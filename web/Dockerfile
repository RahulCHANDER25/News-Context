FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN mv .env.prod .env
EXPOSE 3000

CMD ["npm", "run", "dev"]
