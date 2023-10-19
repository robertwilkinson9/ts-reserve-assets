#!/bin/bash
TYPE=$1

API_IP=$(./backend_address.sh $TYPE)
CONFIG_FILE=$(echo config/config.${TYPE}.json)
API_PORT=$(cat $CONFIG_FILE | jq --raw-output '.APIPORT')
JQSTRING=$(echo -n .config.${TYPE})
PORT=$(cat package.json | jq -r ${JQSTRING})
echo TYPE is $TYPE AND JQSTRING iS ${JQSTRING} AND PORT is $PORT AND API_IP is $API_IP and API_PORT is $API_PORT

cat <<EOF > compose.yaml.${TYPE}
services:
  ${TYPE}_frontend:
    container_name: ${TYPE}_frontend
    build: .
    ports:
      - "${PORT}:${PORT}"
    environment:
      SSL_CERT: "/certs/localhost.crt"
      SSL_KEY: "/certs/localhost.key"
      VITE_API_IP: "${API_IP}"
      VITE_API_PORT: "${API_PORT}"
      VITE_TYPE: "${TYPE}"
EOF

cat <<EOF2 > Dockerfile
FROM node:latest

ARG SSL_CERT
ENV SSL_CERT ${SSL_CERT}
ARG SSL_KEY
ENV SSL_KEY ${SSL_KEY}
ARG API_IP
ENV API_IP ${API_IP}
ARG API_PORT
ENV API_PORT ${API_PORT}
ARG TYPE
ENV TYPE ${TYPE}

RUN apt update
RUN apt install -y git npm
RUN mkdir /certs
ADD ./certs/ /certs
RUN mkdir /src 
RUN git clone https://github.com/robertwilkinson9/ts-reserve-assets.git /src/ts-reserve-assets
WORKDIR /src/ts-reserve-assets
RUN npm install

#ENV NODE_VERSION 15.8.0
#RUN apt update\
#    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash\
#    && . $HOME/.nvm/nvm.sh\
#    && nvm install $NODE_VERSION
#ENV NODE_PATH /root/.nvm/v$NODE_VERSION/lib/node_modules
#ENV PATH /root/.nvm/versions/node/v$NODE_VERSION/bin:$PATH

CMD [ "npm", "run", ${TYPE} ]
EOF2
