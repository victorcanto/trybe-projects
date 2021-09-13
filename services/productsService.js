const productsModel = require('../models/productsModel');

const getNewProduct = (id, name, quantity) => ({ _id: id, name, quantity });

const getAll = async () => productsModel.getAll();

const create = async (name, quantity) => productsModel.create(name, quantity)
  .then(({ insertedId }) => getNewProduct(insertedId, name, quantity));

module.exports = { create, getAll };
