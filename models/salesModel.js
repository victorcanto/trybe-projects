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

const update = async (saleId, salesData) => {
  if (!ObjectId.isValid(saleId)) return null;

  const filter = { _id: ObjectId(saleId) };
  const updateDoc = { $set: { itensSold: salesData } };

  const result = await connection()
    .then((db) => db.collection('sales')
    .updateOne(filter, updateDoc));

  return result;
};

const remove = async (saleId) => {
  if (!ObjectId.isValid(saleId)) return null;

  const filter = { _id: ObjectId(saleId) };

  const result = await connection()
    .then((db) => db.collection('sales')
    .deleteOne(filter));

  return result;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
