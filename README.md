## Descrição

Projeto desenvolvido para ser utilizado como template para uma API REST utilizando o framework NestJS.


## Tecnologias

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Nest.js](https://nestjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [TypeORM](https://typeorm.io/#/)
* [PostgreSQL](https://www.postgresql.org/)
* [Docker/Docker Compose](https://www.docker.com/)
* [OpenAPI/Swagger](https://swagger.io/)
* [Jest](https://jestjs.io/)


## Scripts


```bash
# instalar as dependências do projeto
$ npm install

# rodar a API em desenvolvimento
$ npm run start

# rodar a API em desenvolvimento com reload da aplicação
$ npm run start:dev

# rodar a API em desenvolvimento com debug e reload da aplicação
$ npm run start:debug

# compilar a API
$ npm run build

# executar em produção
$ npm run start:prod

# rodar os testes unitários
$ npm run test

# visualizar a cobertura de testes
$ npm run test:cov

# rodar a aplicação docker
$ docker-compose up

# subir o mongoDB
$ docker-compose up mongo

# subir o PostgreSQL
$ docker-compose up postgre

# Rodar migrations TypeORM
$ npm run typeorm migration:run

# Rodar comandos TypeORM com argumentos
# adicionar -- antes dos argumentos
$ npm run typeorm migration:generate -- -n ExampleCreate
```


## Estrutura das pastas


``` bash
├── test # Teste de integração e E2E
└── .vscode # Configuração do VS Code Debug
├── .husky # Configurações do husky (hooks do git, pre-commit, commit-msg)
├── src
├── application # Aplicação (REST API, controllers, endpoints)
├   │   ├── example # Recurso de Example
├   │   │   ├── dto # Estrutura dos argumentos de entrada e saída do recurso de Example
├   │   │   ├── example.controller.spec.ts # Testes unitários do controller de Example
├   │   │   ├── example.controller.ts # Controller do Example, com as rotas, métodos, validações, swagger
├   │   │   └── example.module.ts # Módulo NestJS do recurso de Example
├   │   ├── main
├   │   │   ├── app.module.ts # Módulo principal do NestJS, inicialização dos banco de dados e recursos
├   │   │   └── main.ts # bootstrap da aplicação/express/http
├   │   └── utils # Métodos úteis da camada de aplicação
├   ├── domain # Domínio/Core Regas de negócios e interfaces
├   │   ├── entities
├   │   ├── interfaces # As interfaces
├   │   │   ├── repositories
├   │   │   └── services
├   │   └── services # A implementaçao do serviços/regras de negócios
├   └── infrastructure # Os recursos de infra
├       ├── config
├       ├── mongoose # Recursos do Mongoose
├           ├── init.ts
├       │   ├── repositories
├       │   └── schemas
├       └── typeorm # Recursos do TypeORM
├           ├── init.ts
├           ├── entities
├           ├── migrations
├           └── repositories
├── ... # Arquivos de configuração, variáveis de ambientes, docker, config, etc.
```
