#!/bin/bash

# default values
port=3000
image="docker"
tag=1

# iterate throught user input arguments
while getopts :p:i:t:d options; do
  case $options in
    p) port=$OPTARG;;
    i) image=$OPTARG;;
    t) tag=$OPTARG;;
    ?) 
      echo "Usage [-p] [-i] [-t]"
      exit 1;;
  esac
done

# if the container exists
if [ "$(docker ps -a | grep $image-$tag)" ];
  then
    # remove container
    docker rm --force $image-$tag
    # remove image
    docker rmi --force $image:$tag
fi

# build the image
docker build -t $image:$tag .

# run the image
docker run --name $image-$tag -it -p $port:3000 $image:$tag

exit 0