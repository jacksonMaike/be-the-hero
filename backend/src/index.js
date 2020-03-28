const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* rota / recurso */

/* metodos http
get: busca uma informacao do back-end
post: criar uma informacao no back-end
put: alterar uma informacao no back-end
delete: deletar uma informacao no back-end
*/

/* tipos de parametros
query: parametros nomeados enviados na rota apos "?" (filtros, paginacao)
route: utilizados para identificar recursos
request body: corpo da requisicao utilizado para criar ou alterar recursos
*/

/*sql: sqlite
  noSql:
*/

/*
driver: SELECT * FROM users
query builder: table('users').select(*)
*/

/*
entidades:
  ong
  casos (incidents)
funcionalidades:
  login de ong
  logout de ong
  cadastro de ong
  cadastrar novos casos
  deletar casos
  listar casos especificos de uma ong
  listar todos os casos
  entrar em contato com a ong
*/

app.listen(3333);