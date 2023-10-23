#/bin/bash
TYPE=$1
BACKEND_IP=$(./get_backend_IP ${TYPE})
echo beip is $BACKEND_IP
BACKEND_PORT=$(kubectl describe pod/${TYPE}-backend | grep API_PORT | awk '{print $NF}')
echo beport is $BACKEND_PORT

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
        value: "${BACKEND_IP}"
      - name: VITE_API_PORT
        value: "${BACKEND_PORT} "
      - name: VITE_TYPE
        value: "${TYPE}"
EOF
