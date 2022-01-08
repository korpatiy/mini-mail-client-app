FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]