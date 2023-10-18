#!/bin/bash
#curl -X POST -H "Content-Type: application/json" --data @new.item http://10.0.2.15:5179/api/item/
#curl -X POST -H "Content-Type: application/json" --data @new.desk --insecure https://localhost:5179/api/desk/
#curl -X POST -H "Content-Type: application/json" --data @new.desk http://192.168.1.185:5180/api/desk/
#curl -X POST -H "Content-Type: application/json" --data @new.desk --insecure https://localhost:443/api/desk/
IPA=localhost
IPP=$(grep APIPORT ../config/config.desk.json | awk '{print $NF}' | sed -e 's/,$//')
curl -X POST -H "Content-Type: application/json" --data @new.desk --insecure https://${IPA}:${IPP}/api/desk/
