const { connection } = require('../connection');

exports.createUser = async (userData) => connection()
  .then((db) => db.collection('users')
  .insertOne({ ...userData, role: 'user' }));
