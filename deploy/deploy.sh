#!/usr/bin/env bash

ENV=$1
HOST_IP=$2
DOCKER_IMAGE=$3
BUILD_VERSION=$4
DOCKER_REGISTRY=$5
DOCKER_REGISTRY_USER=$6
DOCKER_REGISTRY_PASS=$7

ANSIBLE_EXTRA_VARS=\
"\
 host_ip=${HOST_IP}\
 docker_image=${DOCKER_IMAGE}\
 build_version=${BUILD_VERSION}\
 docker_registry=${DOCKER_REGISTRY}\
 docker_registry_user=${DOCKER_REGISTRY_USER}\
 docker_registry_pass=${DOCKER_REGISTRY_PASS}\
"

# Run playbook

ansible-playbook \
  --inventory ./inventory.host ./playbook.${ENV}.yml \
  --private-key ./private-key.txt \
  --user admin \
  --extra-vars "${ANSIBLE_EXTRA_VARS}" \
  -vv