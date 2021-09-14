require('dotenv').config();

const salesService = require('../services/salesService');

const { HTTP_OK_STATUS } = process.env;

const register = async (req, res) => {
  const arrayOfSales = req.body;
  const createdSale = await salesService.create(arrayOfSales);
  res.status(HTTP_OK_STATUS).json(createdSale);
};

module.exports = { register };
