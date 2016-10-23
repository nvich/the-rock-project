FROM node:6.9.1

ENV HOME=E:/server/github/hemersonvianna/the-rock-project

WORKDIR $HOME
COPY . $HOME
RUN npm i

EXPOSE 3000
CMD [ "npm", "start" ]
