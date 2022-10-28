#!/bin/bash
AWS_PROFILE=$1
IMAGE_NAME=
AWS_REGION=
CLUSTER_NAME=
SERVICE_NAME=
REGISTRY_URL=[NEED_REGISTRY_URL].dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_NAME}:latest

function printUsage() {
    echo "Usage: deploy-dev.sh {profileName}"
    echo ""
}

function errorCheck() {
    if [[ $? -ne 0 ]]; then
    exit 1
fi
}

if [[ -z ${AWS_PROFILE} ]]; then
  printUsage
  exit 1
fi

set -e

docker build --platform=linux/arm64 -t ${IMAGE_NAME} .
errorCheck

docker tag ${IMAGE_NAME}:latest ${REGISTRY_URL}
errorCheck

AWS_ID=$(aws sts get-caller-identity --query Account --output text --profile "${AWS_PROFILE}")
errorCheck

aws ecr get-login-password --region ${AWS_REGION} --profile "${AWS_PROFILE}" | docker login --username AWS --password-stdin "${AWS_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
errorCheck

docker push ${REGISTRY_URL}
errorCheck

aws ecs update-service --cluster ${CLUSTER_NAME} --service ${SERVICE_NAME} --force-new-deployment --no-cli-pager --profile "${AWS_PROFILE}"

docker image prune -f

echo "Deploy Success!"
