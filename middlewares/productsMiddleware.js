const productsSchema = require('../schemas/productsSchema');
const productsService = require('../services/productsService');

require('dotenv').config();

const { HTTP_UNPROCESSABLE_ENTITY_STATUS } = process.env;

const validate = async (req, res, next) => {
  const { name, quantity } = req.body;

  const allProducts = await productsService.getAll();

  const validations = productsSchema.validate(allProducts, name, quantity);

  if (!validations) next();

  if (validations.message) {
    return res
      .status(HTTP_UNPROCESSABLE_ENTITY_STATUS)
      .json(validations.message);
  }
};

module.exports = { validate };
