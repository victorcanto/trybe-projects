const salesSchema = require('../schemas/salesSchema');
const productsService = require('../services/productsService');

require('dotenv').config();

const { HTTP_UNPROCESSABLE_ENTITY_STATUS } = process.env;

const validate = async (req, res, next) => {
  const salesArray = req.body;

  const productsArray = await productsService.getAll();

  const validations = salesSchema.validate(salesArray, productsArray);

  if (!validations) next();

  if (validations.message) {
    return res
      .status(HTTP_UNPROCESSABLE_ENTITY_STATUS)
      .json(validations.message);
  }
};

module.exports = { validate };
