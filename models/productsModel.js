const connection = require('./connection');

const getAll = async () => connection().then((db) => db.collection('products').find().toArray());

const create = async (name, quantity) => connection()
  .then((db) => db.collection('products').insertOne({ name, quantity }));

module.exports = {
  getAll,
  create,
};
