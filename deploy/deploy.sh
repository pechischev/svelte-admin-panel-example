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
 build_version=${DOCKER_IMAGE}\
 build_version=${BUILD_VERSION}\
 docker_registry=${DOCKER_REGISTRY}\
 docker_registry_user=${DOCKER_REGISTRY_USER}\
 docker_registry_pass=${DOCKER_REGISTRY_PASS}\
"
ansible-playbook \
  --inventory "inventory.${ENV}" "playbook.${ENV}.yml" \
  --private-key "${SSH_PRIVATE_KEY}" \
  --user admin \
  --extra-vars "${ANSIBLE_EXTRA_VARS}" \
  -vvvv