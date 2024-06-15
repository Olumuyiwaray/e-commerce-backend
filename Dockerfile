FROM node:20.12-alpine3.18

# set working directory
WORKDIR /e-commerce-backend/app


COPY package*.json .


RUN npm ci


COPY . .


RUN npm run build


EXPOSE 3000


CMD [ "node", "dist/app.js" ]