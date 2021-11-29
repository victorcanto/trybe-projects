const socketIo = require('socket.io');

module.exports = (server) => {
  const io = socketIo(server, {
      cors: {
        origin: 'http://localhost:3000', 
        methods: ['GET', 'POST'],
      },
    });

  return io;
};
