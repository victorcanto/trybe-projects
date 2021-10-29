const moment = require('moment');

exports.formatMessage = ({ message, nickname, timestamp }) =>
  `${timestamp} - ${nickname}: ${message}`;

exports.createMsgData = (chatMessage, nickname) => {
  const timestamp = moment(new Date()).format('DD-MM-yyyy HH:mm:ss');
  return {
    message: chatMessage,
    nickname,
    timestamp,
  };
};
