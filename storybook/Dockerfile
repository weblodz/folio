FROM node:18

WORKDIR /app

COPY ../package.json ../package-lock.json ./

RUN npm install
COPY . .
RUN npm run build-storybook

CMD ["npx", "http-server", "storybook-static", "-p", "6006"]
EXPOSE 6006