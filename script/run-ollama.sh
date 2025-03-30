#!/bin/sh

echo -e "Serving Ollama"
ollama serve

echo -e "Pulling Mistral"
ollama pull mistral

echo -e "Running Mistral"
ollama run mistral
