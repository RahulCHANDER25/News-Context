#!/bin/sh
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;32m'
BLUE='\033[0;34m'

NOCOLOR='\033[0m'

echo -e "${BLUE}---- OLLAMA DEPLOYMENT ----${NOCOLOR}"

kubectl apply -f k8s/nc-storage-class.yaml

kubectl apply -f k8s/ollama-pv.yaml
kubectl apply -f k8s/ollama-pvc.yaml

kubectl apply -f k8s/ollama-config-map.yaml
kubectl apply -f k8s/ollama-deployment.yaml
kubectl apply -f k8s/ollama-service.yaml
