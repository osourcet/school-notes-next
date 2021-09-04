FROM node:lts

EXPOSE 3000

RUN mkdir /app

WORKDIR /app

# Nest App
COPY production/dist/ ./dist/
COPY production/package.json .

RUN npm install --unsafe-perm

CMD ["npm", "run", "start:prod"]