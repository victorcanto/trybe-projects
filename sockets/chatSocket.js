const { formatMessage, createMsgData } = require('../utils');
const ChatModel = require('../models/ChatModel');

const onlineUsers = {};

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('nickname', (nickname) => {
      onlineUsers[socket.id] = nickname;
      io.emit('nickname', Object.values(onlineUsers));
    });
    socket.on('message', async ({ chatMessage, nickname }) => {
      onlineUsers[socket.id] = nickname;
      const data = createMsgData(chatMessage, nickname);
      await ChatModel.saveMessage(data);
      const message = formatMessage(data);
      io.emit('message', message);
    });
    socket.on('disconnect', () => {
      delete onlineUsers[socket.id];
      socket.broadcast.emit('nickname', Object.values(onlineUsers));
    });
  });
};
