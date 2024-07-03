FROM node:latest

ARG SSL_CERT
ENV SSL_CERT 
ARG SSL_KEY
ENV SSL_KEY 
ARG API_IP
ENV API_IP 
ARG API_PORT
ENV API_PORT 6176
ARG TYPE
ENV TYPE book

RUN apt update
RUN apt install -y git npm jq
RUN mkdir /certs
ADD ./certs/ /certs
RUN mkdir /src 
RUN git clone https://github.com/robertwilkinson9/ts-ra-config.git /src/ts-ra-config
RUN git clone https://github.com/robertwilkinson9/ts-reserve-assets.git /src/ts-reserve-assets
WORKDIR /src/ts-reserve-assets
RUN npm install

CMD [ "bash", "-c", "generic() { /usr/bin/mkdir -p ./config && /usr/bin/cp -f /config.\"book\".json config/config.json; && vite --port 6175 --host 192.168.1.173 }; npm run generic book ]
