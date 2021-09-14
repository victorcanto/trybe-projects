const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => connection().then((db) => db.collection('sales').find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const salesData = await connection()
    .then((db) => db.collection('sales')
    .findOne(new ObjectId(id)));

  return salesData;
};

const create = async (salesData) => connection()
  .then((db) => db.collection('sales').insertOne({ itensSold: salesData }));

module.exports = { create, getAll, getById };
