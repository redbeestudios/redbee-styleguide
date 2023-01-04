FROM nginx

#WORKDIR /app
COPY default.conf /etc/nginx/conf.d/
COPY storybook-static /usr/share/nginx/html
EXPOSE 81
#CMD ["nginx", "-g", "daemon off;"]

#WORKDIR /app
#COPY build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]|