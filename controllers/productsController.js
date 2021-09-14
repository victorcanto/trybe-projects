require('dotenv').config();

const productsService = require('../services/productsService');
const { createInvalidDataErrorWithMessage } = require('../utils/createError');

const { HTTP_CREATED_STATUS, HTTP_OK_STATUS, HTTP_UNPROCESSABLE_ENTITY_STATUS } = process.env;

const register = async (req, res) => {
  const { name, quantity } = req.body;
  const createdProduct = await productsService.create(name, quantity);
  res.status(HTTP_CREATED_STATUS).json(createdProduct);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const updatedProduct = await productsService.update(id, name, quantity);
  res.status(HTTP_OK_STATUS).json(updatedProduct);
};

const getAll = async (_req, res) => {
  const allProducts = await productsService.getAll();

  if (!allProducts) return null;

  const productsData = { products: allProducts };
  res.status(HTTP_OK_STATUS).json(productsData);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const productFound = await productsService.getById(id);

  const error = createInvalidDataErrorWithMessage('Wrong id format');

  if (!productFound) return res.status(HTTP_UNPROCESSABLE_ENTITY_STATUS).json(error.message);

  res.status(HTTP_OK_STATUS).json(productFound);
};

module.exports = { register, getAll, getById, update };
