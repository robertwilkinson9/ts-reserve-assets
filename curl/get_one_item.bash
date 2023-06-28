#!/bin/bash
ID=$1
curl -X GET -H "Content-Type: application/json" http://10.0.2.15:5179/api/item/${ID}
