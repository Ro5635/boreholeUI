# Use Node:8 Image from Docker hubs and install Angular
#

FROM node:8

# install the angular CLI
RUN npm install -g @angular/cli
