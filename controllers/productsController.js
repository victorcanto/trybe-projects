require('dotenv').config();

const productsService = require('../services/productsService');

const { HTTP_CREATED_STATUS } = process.env;

const register = async (req, res) => {
  const { name, quantity } = req.body;
  const createdProduct = await productsService.create(name, quantity);
  res.status(HTTP_CREATED_STATUS).json(createdProduct);
};

module.exports = { register };
