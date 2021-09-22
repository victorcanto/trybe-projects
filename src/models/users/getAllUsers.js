const { connection } = require('../connection');

exports.getAllUsers = async () => connection()
  .then((db) => db.collection('users').find().toArray());