#!/bin/sh

ollama serve &

sleep 5

ollama pull mistral

ollama run mistral
