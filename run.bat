@echo off

:: Configuração do ambiente virtual para o backend
echo Configurando o ambiente virtual para o backend...
cd backend
python -m venv venv

:: Ativar o ambiente virtual
echo Ativando o ambiente virtual...
call venv\Scripts\activate.bat

:: Instalar dependências no ambiente virtual
echo Instalando dependências...

cd src/backend

pip install -r requirements.txt

cd ../..

:: Iniciar o backend FastAPI no ambiente virtual
echo Iniciando o servidor FastAPI...
start "Backend FastAPI" cmd /k "cd src/backend && uvicorn main:app --reload"

:: Iniciar o frontend React
echo Iniciando o frontend em React...
start "Frontend React" cmd /k "cd src/frontend && npm install && npm start"

