FROM node:16.14

WORKDIR /usr/app

COPY package.json yarn.lock tsconfig.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
