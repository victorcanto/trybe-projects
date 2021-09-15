const salesSchema = require('../schemas/salesSchema');
const productsService = require('../services/productsService');

require('dotenv').config();

const StatusCode = require('../constants');

const validate = async (req, res, next) => {
  const salesArray = req.body;

  const productsArray = await productsService.getAll();

  const validations = salesSchema.validate(salesArray, productsArray);

  if (!validations) next();

  if (validations.message) {
    return res
      .status(StatusCode.UNPROCESSABLE_ENTITY)
      .json(validations.message);
  }
};

module.exports = { validate };
