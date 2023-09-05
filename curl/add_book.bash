#!/bin/bash
curl -X POST -H "Content-Type: application/json" --data @new.book http://192.168.1.185:5180/api/book/
