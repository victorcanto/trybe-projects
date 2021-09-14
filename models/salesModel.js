const connection = require('./connection');

const getAll = async () => connection().then((db) => db.collection('sales').find().toArray());

const create = async (salesData) => connection()
  .then((db) => db.collection('sales').insertOne({ itensSold: salesData }));

module.exports = { create, getAll };
