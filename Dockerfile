# stage1 - build react app first
FROM node:12-alpine as build
WORKDIR /app
COPY ./package.json /app/
RUN yarn 
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN yarn run build
CMD yarn run start

# stage 2 - build the final image and copy the react build files
#FROM nginx:1.21.1-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/nginx.conf /etc/nginx/conf.d
#EXPOSE 8080
#ARG NODE_ENV=""
#ENV NODE_ENV=$NODE_ENV
#CMD ["nginx", "-g", "daemon off;"]

