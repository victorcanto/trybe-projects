const salesModel = require('../models/salesModel');

const getAll = async () => salesModel.getAll();

const getById = async (id) => {
  const sale = await salesModel.getById(id);

  if (!sale) return null;

  return sale;
};

const create = async (salesData) => salesModel.create(salesData)
  .then(({ ops }) => (ops[0]));

const update = async (saleId, salesData) => {
  const { modifiedCount } = await salesModel.update(saleId, salesData);

  let updatedProduct;

  if (modifiedCount) updatedProduct = await getById(saleId);

  return updatedProduct;
};

module.exports = { create, update, getAll, getById };
