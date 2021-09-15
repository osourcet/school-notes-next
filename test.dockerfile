FROM node:lts

EXPOSE 3000

RUN mkdir /app

WORKDIR /app

RUN sudo apt-get install libnss3-dev

# Nest App
COPY test/dist/ ./dist/
COPY test/package.json .

RUN npm install --save

CMD ["npm", "run", "start:prod"]