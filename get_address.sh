#!/bin/bash
TYPE=$1
END=$2
echo type is $TYPE and end is $END
docker inspect ${TYPE}_${END} | ./get_docker_ip_address
