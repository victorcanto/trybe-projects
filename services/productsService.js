const productsModel = require('../models/productsModel');

const getAll = async () => productsModel.getAll();

const getById = async (productId) => {
  const productFound = await productsModel.getById(productId);

  if (!productFound) return null;

  return productFound;
};

const create = async (name, quantity) => productsModel.create(name, quantity)
  .then(({ ops }) => ops[0]);

const update = async (productId, name, quantity) => {
  const { modifiedCount } = await productsModel.update(productId, name, quantity);

  let updatedProduct;

  if (modifiedCount) updatedProduct = await getById(productId);

  return updatedProduct;
};

const remove = async (productId) => {
  const removedProduct = await getById(productId);
  const result = await productsModel.remove(productId);

  if (!result) return null;

  return removedProduct;
};

module.exports = { create, update, remove, getAll, getById };
