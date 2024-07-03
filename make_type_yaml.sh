#!/bin/bash
TYPE=$1

CONFIG_DIR=../ts-ra-config
CONFIG_FILE=$(echo ${CONFIG_DIR}/config.${TYPE}.json)
API_PORT=$(cat $CONFIG_FILE | jq --raw-output '.APIPORT')
COLLECTION=$(cat $CONFIG_FILE | jq --raw-output '.COLLECTION')

MK=$(which minikube) 
if [ $MK ]; then
  echo "HAVE minikube";
  MKURL=$(minikube service ${TYPE}-backend-service --url)
  echo MKURL is $MKURL
  END_POINT=$(echo ${MKURL} | awk -F '//' '{print $2}')
  echo endpoint is $END_POINT
  API_IP=$(echo ${END_POINT} | awk -F: '{print $1}')
  echo API_ip is $API_IP
  API_PORT=$(echo ${END_POINT} | awk -F: '{print $2}')
  echo API_port is $API_PORT
  VITE_TYPE=${TYPE}
else
  API_IP=$(./backend_address.sh ${COLLECTION})
  CONFIG_FILE=$(echo $CONFIG_DIR/config.${TYPE}.json)
  API_PORT=$(cat $CONFIG_FILE | jq --raw-output '.APIPORT')
  VITE_TYPE=$(cat $CONFIG_FILE | jq --raw-output '.ITEM_NAME')
fi

JQSTRING=$(echo -n .config.${TYPE})
PORT=$(cat package.json | jq -r ${JQSTRING})
echo TYPE is $TYPE AND JQSTRING iS ${JQSTRING} AND PORT is $PORT AND API_IP is $API_IP and API_PORT is $API_PORT and VITE_TYPE is $VITE_TYPE

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
      VITE_TYPE: "${VITE_TYPE}"
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
RUN apt install -y git npm jq
RUN mkdir /certs
ADD ./certs/ /certs
RUN mkdir /src 
RUN git clone https://github.com/robertwilkinson9/ts-ra-config.git /src/ts-ra-config
RUN git clone https://github.com/robertwilkinson9/ts-reserve-assets.git /src/ts-reserve-assets
WORKDIR /src/ts-reserve-assets
RUN npm install

CMD [ "bash", "-c", "generic() { /usr/bin/mkdir -p ./config && /usr/bin/cp -f $npm_package_config_directory/config.\"$1\".json config/config.json; && sleep 5 && vite --port $(cat config/config.json | /usr/bin/jq --raw-output '.APIPORT') --host $(hostname -I | awk '{print $1}') }; npm run generic ${TYPE} ]
EOF2
