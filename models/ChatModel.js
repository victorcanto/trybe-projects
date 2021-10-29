const connection = require('./connection');

const saveMessage = async (data) => {
  const db = await connection();
  const savedDoc = await db.collection('messages').insertOne({ ...data });
  return savedDoc;
};

const getAllMessages = async () => {
  const db = await connection();
  const messages = await db.collection('messages').find({}).toArray();
  return messages;
};

module.exports = {
  saveMessage,
  getAllMessages,
};