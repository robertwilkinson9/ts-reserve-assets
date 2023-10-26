#!/bin/bash
#curl -X POST -H "Content-Type: application/json" --data @new.book http://192.168.1.185:5180/api/book/
#curl -X POST -H "Content-Type: application/json" --data @new.book --insecure https://localhost:443/api/book/
IPA=localhost
IPP=$(grep APIPORT ../config/config.book.json | awk '{print $NF}' | sed -e 's/,$//')
OPT_OUT=$(curl --request-target "*" -X OPTIONS --insecure https://${IPA}:${IPP}/api/book/)
echo OPT_OUT is ${OPT_OUT}
curl --cert /certs/localhost.crt --key /certs/localhost.key -X OPTIONS --insecure --header "Origin: localhost" https://localhost:6180/api/book
