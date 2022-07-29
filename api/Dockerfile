FROM node:lts-slim
WORKDIR home/node/API
COPY package.json .
RUN npm install
COPY . .
# RUN npm run test
CMD npm start