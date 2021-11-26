const express = require('express');
const cors = require('cors');

const app = express();

const server = require('http').createServer(app);

const io = require('./sockets/ioConfig')(server);

app.use(cors());
app.use(express.json());

const routes = require('./routes');

require('./sockets/orderStatus')(io);

app.use(routes);

app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = server;
