#!/bin/bash
TYPE=$1

API_IP=$(docker inspect ${TYPE}_backend | ./get_docker_ip_address)
echo ${TYPE} at https://${API_IP}
