#!/bin/bash
curl --cert /certs/localhost.crt --key /certs/localhost.key -X OPTIONS --insecure --header "Origin: localhost" https://localhost:6180/api/book
