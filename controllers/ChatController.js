const ChatModel = require('../models/ChatModel');

const getAllMessages = async (_req, res) => {
  try {
    const messages = await ChatModel.getAllMessages();
    return res.status(200).render('chat/index', { messages });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAllMessages };