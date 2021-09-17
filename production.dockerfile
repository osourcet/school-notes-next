FROM node:lts
USER root

EXPOSE 3000

RUN mkdir /app

WORKDIR /app

RUN apt-get update && \
    apt-get install -y \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgbm1 \
    libgcc1 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    lsb-release \
    wget \
    xdg-utils && \
    apt-get -f install && \
    rm -r -d -f /var/lib/apt/lists/*

# Nest App
COPY production/dist/ ./dist/
COPY production/package.json .

RUN npm install --save

RUN groupadd -r node-user \
    && useradd -r -g node-user -G audio,video node-user \
    && chown -R node-user:node-user /app 

USER node-user
WORKDIR /app

RUN pwd
RUN ls -la

CMD ["npm", "run", "start:prod"]