const productsModel = require('../models/productsModel');

const getNewProduct = (id, name, quantity) => ({ _id: id, name, quantity });

const getAll = async () => productsModel.getAll();

const getById = async (productId) => {
  const productFound = await productsModel.getById(productId);

  if (!productFound) return null;

  return productFound;
};

const create = async (name, quantity) => productsModel.create(name, quantity)
  .then(({ insertedId }) => getNewProduct(insertedId, name, quantity));

const update = async (productId, name, quantity) => productsModel.update(productId, name, quantity)
  .then(({ insertedId }) => getNewProduct(insertedId, name, quantity));

module.exports = { create, update, getAll, getById };
