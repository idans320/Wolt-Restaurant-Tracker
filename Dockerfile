FROM node:lts-alpine
ADD . /
RUN yarn install && yarn build
CMD yarn start
