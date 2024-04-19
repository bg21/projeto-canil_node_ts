# projeto-canil_node_ts

## Dependêncas: 
npm install express mustache-express dotenv

## Dependências DEV: 
npm install --save-dev @types/express @types/mustache-express @types/node


## Requisitos globais
npm install nodemon typescript ts-node 

## Definir
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start-dev": "nodemon -e ts,json,mustache src/server.ts"
  },

## Rodar o projeto
npm run start-dev