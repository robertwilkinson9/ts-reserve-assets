#!/bin/bash
TYPE=$1
echo $TYPE

if [ -e Dockerfile.${TYPE} ] ;
then
  ln -sf Dockerfile.${TYPE} Dockerfile
fi

./make_type_yaml.sh ${TYPE}

docker compose --file compose.yaml.${TYPE} up
