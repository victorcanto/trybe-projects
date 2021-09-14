const salesModel = require('../models/salesModel');

const getAll = async () => salesModel.getAll();

const create = async (salesData) => salesModel.create(salesData)
  .then(({ ops }) => (ops[0]));

const getById = async (id) => {
  const sale = await salesModel.getById(id);

  if (!sale) return null;

  return sale;
};

module.exports = { create, getAll, getById };
