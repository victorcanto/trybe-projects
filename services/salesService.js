const salesModel = require('../models/salesModel');

const getAll = async () => salesModel.getAll();

const create = async (salesData) => salesModel.create(salesData)
  .then(({ ops }) => (ops[0]));

module.exports = { create, getAll };
