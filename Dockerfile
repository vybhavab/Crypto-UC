FROM alpine:3.14.2

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

COPY public/ ./public/
COPY src/ ./src/

RUN apk add --update nodejs npm
RUN npm install -g yarn
RUN yarn install

EXPOSE 3000
CMD yarn run start