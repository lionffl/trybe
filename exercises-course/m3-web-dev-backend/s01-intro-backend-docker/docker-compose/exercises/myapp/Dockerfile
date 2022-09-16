FROM node:16

WORKDIR /myapp

COPY package.json /myapp/

RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "start" ]