#!/bin/bash

function clrd() {
    echo -e "\033[${3:-0};$2m$1\033[0m"
}

function clrn() {
    echo -n -e "\033[${3:-0};$2m$1\033[0m"
}

while getopts "dl:" opt; do
    case ${opt} in 
        d) USE_DOCKER='true';;
        l) LOG_LEVEL=${OPTARG};;
    esac
done

LOG_LEVEL=${LOG_LEVEL:-info}
CONTAINER=answermb

echo
clrd "Optional parameters:" 33
clrn "  -d " 36; clrd ": Use docker container instead of node" 33
clrn "  -l " 36; clrn ": Set log level. Default is info. Acceptable inputs: " 33;clrd " debug, info, warn" 34
echo
clrn "Current log level: " 33 ; clrd "${LOG_LEVEL}" 34
echo
echo

if [ -n "$(docker ps -a -q -f status=running -f name=$CONTAINER)" ]; then
    echo "Killing already running $CONTAINER..."
    docker stop $CONTAINER
    docker rm $CONTAINER
    echo ""
elif [ -n "$(docker ps -q -f status=exited -f name=$CONTAINER)" ] || [ -n "$(docker ps -q -f status=dead -f name=$CONTAINER)" ]; then
    echo "Removing exited/dead $CONTAINER..."
    docker rm $CONTAINER
    echo ""
fi

if [ ! -z "${USE_DOCKER}" ]; then
    docker image rm -f $CONTAINER
    docker build -t $CONTAINER --build-arg LOG_LEVEL=${LOG_LEVEL} .
        
    docker run -d \
        -p 2525:2525 \
        -p 4545:4545 \
        -p 4201:80 \
        --name $CONTAINER \
        answermb
    # -p hostport:containerport
    docker ps -a
else 
    mb --configfile imposters/imposters.ejs --allowInjection --localOnly --nologfile --loglevel ${LOG_LEVEL}
fi
