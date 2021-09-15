const productsSchema = require('../schemas/productsSchema');
const productsService = require('../services/productsService');

require('dotenv').config();

const StatusCode = require('../constants');

const validate = async (req, res, next) => {
  const { name, quantity } = req.body;

  const allProducts = await productsService.getAll();

  const validations = productsSchema.validate(allProducts, name, quantity);

  if (!validations) next();

  if (validations.message) {
    return res
      .status(StatusCode.UNPROCESSABLE_ENTITY)
      .json(validations.message);
  }
};

module.exports = { validate };
