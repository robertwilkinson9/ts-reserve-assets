#!/bin/bash
ID=$1
curl -X DELETE http://10.0.2.15:5179/api/item/${ID}
