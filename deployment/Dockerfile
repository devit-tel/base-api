############################################################
# Dockerfile to SendIT API server
# Based on Node 6.10.0 image
############################################################

FROM node:7
MAINTAINER Watchrapong Agsonchu watchrapong_ags@sendit.asia

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /var/source && cp -a /tmp/node_modules /var/source

RUN cp -a /tmp/node_modules /var/source

ADD . /var/source
WORKDIR /var/source
EXPOSE 80 443
ENTRYPOINT ["npm", "start"]
