#/bin/bash
TYPE=$1
PORT=$2
#BACKEND_IP=$(kubectl describe service/${TYPE}-backend-service | grep ^IP: | awk '{print $NF}')
#echo beip is $BACKEND_IP
#BACKEND_PORT=$(kubectl describe service/${TYPE}-backend-service | grep TargetPort: | awk '{print $2}' | awk -F/ '{print $1}')
#echo beport is $BACKEND_PORT
SRC_DIR="../../typescript/ts-reserve-assets/"
FE_PORT=$(cat ${SRC_DIR}/package.json | jq --raw-output .config.${TYPE})
echo FE_PORT is $FE_PORT
END_POINTS=$(kubectl describe service/${TYPE}-backend-service | grep ^Endpoints: | awk '{print $NF}')
echo endpoints is $END_POINTS
END_POINT_IP=$(echo ${END_POINTS} | awk -F: '{print $1}')
echo endpoint_ip is $END_POINT_IP
END_POINT_PORT=$(echo ${END_POINTS} | awk -F: '{print $2}')
echo endpoint_port is $END_POINT_PORT

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
        - containerPort: ${FE_PORT}
      env:
      - name: SSL_CERT
        value: /certs/localhost.crt
      - name: SSL_KEY
        value: /certs/localhost.key
      - name: VITE_API_IP
        value: "${END_POINT_IP}"
      - name: VITE_API_PORT
        value: "${END_POINT_PORT}"
      - name: VITE_TYPE
        value: "${TYPE}"
EOF
