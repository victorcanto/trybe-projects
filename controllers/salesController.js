const { createNotFoundErrorWithMessage,
   createInvalidDataErrorWithMessage } = require('../utils/createError');
const salesService = require('../services/salesService');
require('dotenv').config();

const StatusCode = require('../constants');

const register = async (req, res) => {
  const arrayOfSales = req.body;
  const createdSale = await salesService.create(arrayOfSales);
  res.status(StatusCode.OK).json(createdSale);
};

const update = async (req, res) => {
  const { id } = req.params;
  const arrayOfSales = req.body;

  const updatedProduct = await salesService.update(id, arrayOfSales);
  res.status(StatusCode.OK).json(updatedProduct);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const removedSale = await salesService.remove(id);

  const error = createInvalidDataErrorWithMessage('Wrong sale ID format');

  if (!removedSale) return res.status(StatusCode.UNPROCESSABLE_ENTITY).json(error.message);
  res.status(StatusCode.OK).json(removedSale);
};

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();

  const salesData = { sales };
  res.status(StatusCode.OK).json(salesData);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const salesFound = await salesService.getById(id);

  const error = createNotFoundErrorWithMessage('Sale not found');

  if (!salesFound) return res.status(StatusCode.NOT_FOUND).json(error.message);
  res.status(StatusCode.OK).json(salesFound);
};

module.exports = { register, update, remove, getAll, getById };
