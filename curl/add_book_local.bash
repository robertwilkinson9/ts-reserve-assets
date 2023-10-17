#!/bin/bash
#curl -X POST -H "Content-Type: application/json" --data @new.book http://192.168.1.185:5180/api/book/
#curl -X POST -H "Content-Type: application/json" --data @new.book --insecure https://localhost:443/api/book/
IPA=localhost
IPP=$(grep APIPORT ../config/config.book.json | awk '{print $NF}' | sed -e 's/,$//')
curl -X POST -H "Content-Type: application/json" --data @new.book --insecure https://${IPA}:${IPP}/api/book/
