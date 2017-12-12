FROM node:9.2
LABEL maintainer="uristolar@gmail.com"
EXPOSE 8888
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm i
CMD ["npm", "start"]
VOLUME /usr/src/app/src/