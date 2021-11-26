const port = process.env.PORT || 3001;
const server = require('./app');

server.listen(port);
console.log(`Api rodando na porta ${port}`);
