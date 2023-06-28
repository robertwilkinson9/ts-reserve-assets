#!/bin/bash
ID=$1
curl -X PUT -H "Content-Type: application/json" --data @put.item http://10.0.2.15:5179/api/item/${ID}
