# WebApp do HackathAN - 2024

## Descrição

Este WebApp é uma plataforma colaborativa e gamificada destinada à catalogação de documentos arquivísticos. Desenvolvido para ser acessado via navegador em dispositivos móveis e desktops, o aplicativo integra tecnologia moderna com a experiência do usuário para facilitar a participação ativa e recompensadora no processo de documentação e preservação cultural.


## Integrantes
- [Mauro Chagas](https://www.linkedin.com/in/mauro-das-chagas-junior/)
- [Fernando Antonio](https://www.linkedin.com/in/fernando-vasconcellos-/)
- [Caio de Paula](https://www.linkedin.com/in/caio-teixeira-paula/)
- [Luiza Rubim](https://www.linkedin.com/in/luiza-rubim/)
- [Rodrigo Sales](https://www.linkedin.com/in/rodrigo-sales-07/)

## Funcionalidades

- **Catalogação de Documentos:** Usuários podem adicionar tags, fazer descrições e votar em contribuições de outros usuários.
- **Revisão especializada:** Profissionais da área da academia podem revisar e validar contribuições.
- **Gamificação:** Pontuação por contribuições válidas, trocáveis por benefícios como descontos em eventos culturais.
- **Integração com Contas do gov.com:** Login seguro e personalizado usando credenciais do gov.com.
- **Tutorial Interativo:** Guia prático e dinâmico para novos usuários aprenderem a usar a plataforma.
- **Suporte Técnico:** Suporte disponível através da plataforma para dúvidas ou problemas técnicos.

## Tecnologias Utilizadas

- **Backend:** Python com FastAPI
- **Frontend:** React JS com TailWind
- **Bancos de Dados:** TinyDB e SQLite
- **Design e Prototipação:** Figma e MIRO

## Estrutura de Pastas

## backend
- Controllers
  - Controlers são responsáveis por receber as requisições HTTP e retornar as respostas HTTP.
- Data
  - Cotem os arquivos de banco de dados.
- Models
  - Models são responsáveis por representar as entidades do sistema.
- Services
  - Services são responsáveis por implementar a lógica de negócio.
- `.gitignore`
- `main.py`
- `requirements.txt`

## frontend
- node_modules
- public
  -  Public é a pasta onde ficam os arquivos estáticos do projeto.
- src
  - Components
    - Components são responsáveis por representar os componentes do sistema.
  - Pages
    - Pages são responsáveis por representar as páginas do sistema.
- `.gitignore`
- `package-lock.json`
- `package.json`
- `README.md`
- `tailwind.config.js`

## Como executar o projeto

Existe 2 formas de executar o projeto:

1. Local
2. Link público 

### Local

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório
2. Abra o terminal na pasta do projeto
3. Após isso vocÇe pode executar o arquivo 'run.bat', para executar automaticamente o projeto, ou executar manualmente os comandos abaixo:
```bash
python -m venv venv
venv\Scripts\activate
```
Em outro terminais, execute:

```bash
cd src/frontend
npm install
npm start
```
```bash
cd src/backend
python -m pip install -r requirements.txt
uvicorn main:app --reload
```

### Link Público

Nos fizemos o deploy do front-end do projeto na platafama Vercel, e o back-end na Render, para acessar o projeto, basta clicar no link abaixo:

[Link do Projeto](https://hackaton-arquivo-nacional.vercel.app/)


