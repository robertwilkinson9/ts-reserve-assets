#!/bin/bash
#curl -X POST -H "Content-Type: application/json" --data @new.book http://192.168.1.185:5180/api/book/
#curl -X POST -H "Content-Type: application/json" --data @new.book --insecure https://localhost:443/api/book/
CONFIG_DIR="../ts-ra-config"
IPA=localhost
IPP=$(grep APIPORT ../${CONFIG_DIR}/config.book.json | awk '{print $NF}' | sed -e 's/,$//')
curl -X POST -H "Content-Type: application/json" --data @new.book --insecure https://${IPA}:${IPP}/api/book/
