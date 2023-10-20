#/bin/bash
TYPE=$1
BACKENDIP=$(./get_backend_IP ${TYPE})
echo beip is $BACKENDIP

cat << EOF > ${TYPE}-frontend.yaml
---
apiVersion: v1
kind: Pod
metadata:
  name: ${TYPE}-frontend
  labels:
    app: web
spec:
  containers:
    - name: ${TYPE}-frontend
      image: robertwilkinsonwork299/reserve-assets-${TYPE}-frontend
      ports:
        - containerPort: 5176
      env:
      - name: SSL_CERT
        value: /certs/localhost.crt
      - name: SSL_KEY
        value: /certs/localhost.key
      - name: VITE_API_IP
        value: "${BACKENDIP}"
      - name: VITE_API_PORT
        value: "6180 "
      - name: VITE_TYPE
        value: "${TYPE}"
EOF
