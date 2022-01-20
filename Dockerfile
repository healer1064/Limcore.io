# stage1 - build react app first
FROM node:12-alpine as build
WORKDIR /app
COPY ./package.json /app/
RUN yarn
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN yarn run build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.21.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

