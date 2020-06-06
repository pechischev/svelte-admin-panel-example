#!/usr/bin/env bash

# Run playbook

ENV=$1
SSH_PRIVATE_KEY=$2
HOST_IP=$3
DOCKER_IMAGE=$4
BUILD_VERSION=$5
DOCKER_REGISTRY=$6
DOCKER_REGISTRY_USER=$7
DOCKER_REGISTRY_PASS=$8

ANSIBLE_EXTRA_VARS=\
"\
 host_ip=${HOST_IP}\
 docker_image=${DOCKER_IMAGE}\
 build_version=${BUILD_VERSION}\
 docker_registry=${DOCKER_REGISTRY}\
 docker_registry_user=${DOCKER_REGISTRY_USER}\
 docker_registry_pass=${DOCKER_REGISTRY_PASS}\
"

echo "HOST_IP ${HOST_IP}"
echo "DOCKER_IMAGE ${DOCKER_IMAGE}"
echo "BUILD_VERSION ${BUILD_VERSION}"
echo "DOCKER_REGISTRY ${DOCKER_REGISTRY}"
echo "DOCKER_REGISTRY_USER ${DOCKER_REGISTRY_USER}"
echo "DOCKER_REGISTRY_PASS ${DOCKER_REGISTRY_PASS}"
cat ./private-key.txt

ansible-playbook \
  --inventory ./inventory.host ./playbook.${ENV}.yml \
  --private-key ./private-key.txt \
  --user admin \
  --extra-vars "${ANSIBLE_EXTRA_VARS}" \
  -vvvv