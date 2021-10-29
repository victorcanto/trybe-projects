const { formatMessage, createMsgData } = require('../utils');
const ChatModel = require('../models/ChatModel');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('message', async ({ chatMessage, nickname }) => {
      const data = createMsgData(chatMessage, nickname);
      await ChatModel.saveMessage(data);
      const message = formatMessage(data);
      io.emit('message', message);
      socket.on('disconnect', () => {
        console.log(`${nickname} desconectado`);
      });
    });
  });
};
