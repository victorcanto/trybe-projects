const express = require('express');

const app = express();

app.use(express.json());
const routes = require('./routes');

app.use(routes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
