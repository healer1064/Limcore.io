# stage1 - build react app first
FROM node:12.16.1-alpine3.9 as build
WORKDIR /app
COPY ./package.json /app/
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.17.8-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8080
ARG NODE_ENV=""
ENV NODE_ENV=$NODE_ENV
CMD ["nginx", "-g", "daemon off;"]
