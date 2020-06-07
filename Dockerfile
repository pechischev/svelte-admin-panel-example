FROM node:14

WORKDIR /usr/src/app

RUN apt update && apt install -y python3

COPY public /usr/src/app/public
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm i

CMD ["npm", "run", "start"]