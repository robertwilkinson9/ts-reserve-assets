#/bin/bash
TYPE=$1

CONFIG_DIR="../rs-ra-config"
SRC_DIR="../../typescript/ts-reserve-assets/"
FE_PORT=$(cat ${SRC_DIR}/package.json | jq --raw-output .config.${TYPE})
echo FE_PORT is $FE_PORT
VITE_TYPE=$(jq '.ITEM_NAME' ${CONFIG_DIR}/config.${TYPE}.json)
echo vite_type is $VITE_TYPE

MK=$(which minikube) 
if [ $MK ]; then
  echo "HAVE minikube";
  MKURL=$(minikube service ${TYPE}-backend-service --url)
  echo MKURL is $MKURL
  END_POINT=$(echo ${MKURL} | awk -F '//' '{print $2}')
  echo endpoint is $END_POINT
  END_POINT_IP=$(echo ${END_POINT} | awk -F: '{print $1}')
  echo endpoint_ip is $END_POINT_IP
  END_POINT_PORT=$(echo ${END_POINT} | awk -F: '{print $2}')
  echo endpoint_port is $END_POINT_PORT
else
  END_POINTS=$(kubectl describe service/${TYPE}-backend-service | grep ^Endpoints: | awk '{print $NF}')
  echo endpoints is $END_POINTS
  END_POINT_IP=$(echo ${END_POINTS} | awk -F: '{print $1}')
  echo endpoint_ip is $END_POINT_IP
  END_POINT_PORT=$(echo ${END_POINTS} | awk -F: '{print $2}')
  echo endpoint_port is $END_POINT_PORT
fi

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
        value: "${VITE_TYPE}"
EOF
