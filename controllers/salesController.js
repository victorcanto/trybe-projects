const { createNotFoundErrorWithMessage,
   createInvalidDataErrorWithMessage } = require('../utils/createError');
const salesService = require('../services/salesService');
require('dotenv').config();

const { HTTP_OK_STATUS, HTTP_NOT_FOUND_STATUS, HTTP_UNPROCESSABLE_ENTITY_STATUS } = process.env;

const register = async (req, res) => {
  const arrayOfSales = req.body;
  const createdSale = await salesService.create(arrayOfSales);
  res.status(HTTP_OK_STATUS).json(createdSale);
};

const update = async (req, res) => {
  const { id } = req.params;
  const arrayOfSales = req.body;

  const updatedProduct = await salesService.update(id, arrayOfSales);
  res.status(HTTP_OK_STATUS).json(updatedProduct);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const removedSale = await salesService.remove(id);

  const error = createInvalidDataErrorWithMessage('Wrong sale ID format');

  if (!removedSale) return res.status(HTTP_UNPROCESSABLE_ENTITY_STATUS).json(error.message);
  res.status(HTTP_OK_STATUS).json(removedSale);
};

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();

  const salesData = { sales };
  res.status(HTTP_OK_STATUS).json(salesData);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const salesFound = await salesService.getById(id);

  const error = createNotFoundErrorWithMessage('Sale not found');

  if (!salesFound) return res.status(HTTP_NOT_FOUND_STATUS).json(error.message);
  res.status(HTTP_OK_STATUS).json(salesFound);
};

module.exports = { register, update, remove, getAll, getById };
