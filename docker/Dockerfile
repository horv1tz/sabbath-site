FROM node:22-alpine AS build
LABEL authors="horvitz"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.27.4-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 4173

CMD ["nginx", "-g", "daemon off;"]
