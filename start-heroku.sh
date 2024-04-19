#!/bin/bash

# Assume-se que este script esteja na raiz do monorepo

# Instalar dependências e construir o projeto React
echo "Building React frontend..."
cd src/frontend
npm install
npm run build
cd ..

# Instalar dependências do FastAPI e iniciar o servidor
echo "Starting FastAPI backend..."
cd ../backend
pip install -r requirements.txt
uvicorn main:app --reload

