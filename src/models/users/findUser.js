const { connection } = require('../connection');

exports.findUser = async (email) => connection()
  .then((db) => db.collection('users').findOne({ email }));
