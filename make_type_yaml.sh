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
  book_frontend:
    container_name: book_frontend
    build: .
    ports:
      - "${PORT}:${PORT}"
    environment:
      SSL_CERT: "/certs/localhost.crt"
      SSL_KEY: "/certs/localhost.key"
      API_IP: ${API_IP}
      VITE_API_IP: ${API_IP}
      API_PORT: ${API_PORT} 
EOF
