<br />

[![linkedin]][linkedin-url]
[![github]][github-url]
![email]

<br />

# Blogs API - Projeto Backend

Este é um projeto de backend para API de um blog, desenvolvido usando Node.js e o framework Express. Ele fornece endpoints para criar, listar, atualizar e excluir usuários, categorias e postagens de um blog.

<br />

## Built With

[![javaScript][js]][js-url]
[![NODE]][node-url]
[![express]][express-url]
[![Docker]][docker-url]
[![MYSQL]][mysql-url]
[![sequelize]][sequelize-url]


<br />

## Funcionalidades

- Gerenciamento de usuários: criação, listagem e exclusão de usuários.
- Gerenciamento de categorias: criação e listagem de categorias.
- Gerenciamento de postagens: criação, listagem, atualização e exclusão de postagens.

<br />

## Pré-requisitos

Antes de executar o projeto, verifique se você possui o seguinte instalado em sua máquina:

- Node.js
- npm (Node Package Manager)
- Docker
- Docker Compose

<br />

## Instalação e Execução

 - Antes de iniciar o processo verifique se nenhuma das portas necessarias esta sendo utilizada.
 - Caso queira finalizar todas as portas utilize o comando:

  ```bash
  sudo killall -9 $(sudo lsof -t -i)
  ```

<br />

## Com Docker

  - Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.

 > Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`. (Instale dentro do container)
  
  - Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

<br />
  
  ## Sem Docker

  > Instale as dependências com `npm install`
  
  - Lembre-se de usar o prefixo `env $(cat .env)` ao rodar os comandos localmente para carregar as variáveis de ambiente do arquivo `.env`. Por exemplo:
  
    ```bash
    env $(cat .env) npm run dev
    ```

<br/>

## Endpoints

A API possui os seguintes endpoints disponíveis:

- `POST /login`: Realiza login do usuário.

<br />


- `GET /user`: Lista todos os usuários.
- `GET /user/:id`: Obtém os detalhes de um usuário com base no ID.
- `POST /user`: Cria um novo usuário.
- `DELETE /user/:id`: Deleta um usuário com base no ID.

<br />

- `GET /categories`: Lista todas as categorias.
- `POST /categories`: Cria uma nova categoria.

<br />


- `GET /post`: Lista todas as postagens.
- `GET /post/search`: Lista todas as postagens de acordo com o termo da busca.
- `GET /post/:id`: Obtém os detalhes de uma postagem com base no ID.
- `POST /post`: Cria uma nova postagem.
- `PUT /post/:id`: Atualiza uma postagem com base no ID.
- `DELETE /post/:id`: Deleta uma postagem com base no ID.

<br />

## Middlewares

A API utiliza os seguintes middlewares:

- `loginValidate`: Valida os dados de login do usuário.
- `emailValidate`: Valida o formato do e-mail.
- `categoryValidate`: Valida os dados da categoria.
- `postValidate`: Valida os dados da postagem.
- `verifyUserPost`: Verifica se o usuário tem permissão para modificar a postagem.
- `updateValidate`: Valida os dados para atualização da postagem.
- `jwt.createToken`: Middleware para gerar um JSON Web Token.
- `jwt.authToken`: Middleware para autenticação com JSON Web Token.

<br />

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request para melhorias no projeto.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin]: https://img.shields.io/badge/-LinkedIn-35495E.svg?style=for-the-badge&logo=linkedin

[linkedin-url]: https://https://www.linkedin.com/in/bernardo-marquesp/

[email]: https://img.shields.io/badge/bernardomp.dev@gmail.com-35495E?style=for-the-badge&logo=gmail&logoColor=white

[github]: https://img.shields.io/badge/GitHub-35495E?style=for-the-badge&logo=github&logoColor=white

[github-url]: https://github.com/Bernmp-dev

[js]: https://img.shields.io/badge/Javascript-35495E?style=for-the-badge&logo=Javascript

[js-url]: https://www.javascript.com/

[Docker]: https://img.shields.io/badge/Docker-35495E?style=for-the-badge&&logo=Docker

[docker-url]: https://www.docker.com/

[Docker-Compose]: https://img.shields.io/badge/Docker_Compose-35495E?style=for-the-badge&&logo=Docker

[Node]: https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&&logo=Node.js

[node-url]: https://nodejs.org/

[MySQL]: https://img.shields.io/badge/MySQL-35495E?style=for-the-badge&&logo=MySQL

[mysql-url]: https://www.mysql.com/

[express]: https://img.shields.io/badge/express-35495E?style=for-the-badge&&logo=express

[express-url]: https://expressjs.com/

[sequelize]: https://img.shields.io/badge/sequelize-35495E?style=for-the-badge&&logo=sequelize

[sequelize-url]: https://sequelize.org/
