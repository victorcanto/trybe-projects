const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => connection().then((db) => db.collection('products').find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const productData = await connection()
    .then((db) => db.collection('products')
    .findOne(new ObjectId(id)));

  return productData;
};

const create = async (name, quantity) => connection()
  .then((db) => db.collection('products').insertOne({ name, quantity }));

const update = async (id, name, quantity) => {
  if (!ObjectId.isValid(id)) return null;

  const filter = { _id: ObjectId(id) };
  const updateDoc = { $set: { name, quantity } };

  const result = await connection()
    .then((db) => db.collection('products')
    .updateOne(filter, updateDoc));

  return result;
};

const remove = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const filter = { _id: ObjectId(id) };

  const result = await connection()
    .then((db) => db.collection('products')
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
