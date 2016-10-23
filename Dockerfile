FROM node:6.9.1

ENV HOME=/app

WORKDIR $HOME
COPY . $HOME
RUN npm i

EXPOSE 3000
CMD [ "npm", "start" ]
