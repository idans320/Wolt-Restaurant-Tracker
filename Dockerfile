FROM node:lts-alpine
RUN node install yarn --global
ADD .
RUN yarn install && yarn build
CMD yarn start
