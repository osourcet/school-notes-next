FROM node:lts

EXPOSE 3000

RUN mkdir /app

WORKDIR /app

RUN apt-get update && apt-get -y install libnss3-dev && apt-get -y -f install

# Nest App
COPY production/dist/ ./dist/
COPY production/package.json .

RUN npm install --save

RUN pwd
RUN ls -la

CMD ["npm", "run", "start:prod"]