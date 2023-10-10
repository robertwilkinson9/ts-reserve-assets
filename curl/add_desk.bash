#!/bin/bash
#curl -X POST -H "Content-Type: application/json" --data @new.item http://10.0.2.15:5179/api/item/
curl -X POST -H "Content-Type: application/json" --data @new.desk --insecure https://localhost:5179/api/desk/
