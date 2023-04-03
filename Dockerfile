FROM node:16.14.0

# Add Maintainer Info
LABEL maintainer="Vidyasena Dev <oni.harnantyo97@gmail.com>"

ARG BUILD_USER
ARG BUILD_MACHINE
ARG BUILD_TOKEN


ENV build_token=$BUILD_TOKEN
ENV build_user=$BUILD_USER
ENV build_machine=$BUILD_MACHINE

WORKDIR /app/channa

ADD . /app/channa

RUN npm i -g pnpm

RUN pnpm install
RUN pnpm build

EXPOSE 3000

CMD ["sh", "-c", "npm run start"]