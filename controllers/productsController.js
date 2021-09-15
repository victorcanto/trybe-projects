require('dotenv').config();

const productsService = require('../services/productsService');
const { createInvalidDataErrorWithMessage } = require('../utils/createError');

const StatusCode = require('../constants');

const error = createInvalidDataErrorWithMessage('Wrong id format');

const register = async (req, res) => {
  const { name, quantity } = req.body;
  const createdProduct = await productsService.create(name, quantity);
  res.status(StatusCode.CREATED).json(createdProduct);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const updatedProduct = await productsService.update(id, name, quantity);
  res.status(StatusCode.OK).json(updatedProduct);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const removedProduct = await productsService.remove(id);

  if (!removedProduct) return res.status(StatusCode.UNPROCESSABLE_ENTITY).json(error.message);
  res.status(StatusCode.OK).json(removedProduct);
};

const getAll = async (_req, res) => {
  const allProducts = await productsService.getAll();

  if (!allProducts) return null;

  const productsData = { products: allProducts };
  res.status(StatusCode.OK).json(productsData);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const productFound = await productsService.getById(id);

  if (!productFound) return res.status(StatusCode.UNPROCESSABLE_ENTITY).json(error.message);

  res.status(StatusCode.OK).json(productFound);
};

module.exports = { register, getAll, getById, update, remove };
