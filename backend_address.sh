#!/bin/bash
TYPE=$1
docker inspect ${TYPE}_backend | ./get_docker_ip_address
