FROM node:13.12.0-alpine

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]