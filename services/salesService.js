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

  let updatedSale;

  if (modifiedCount) updatedSale = await getById(saleId);

  return updatedSale;
};

const remove = async (saleId) => {
  const removedSale = await getById(saleId);
  const result = await salesModel.remove(saleId);

  if (!result) return null;

  return removedSale;
};

module.exports = { create, update, remove, getAll, getById };
