const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const loginRouter = require('../routes/login');
const usersRouter = require('../routes/users');
const recipesRouter = require('../routes/recipes');

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
