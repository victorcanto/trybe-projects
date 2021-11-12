const { productSchema } = require('../schemas/productSchema');
const { Product } = require('../database/models');
const { httpStatusCode, validateResponse } = require('../utils');

module.exports = {
  async create({ name, price, urlImage }) {
    const { error } = productSchema.validate({ name, price, urlImage });

    if (error) {
      return validateResponse(
        httpStatusCode.badRequest,
        error.details[0].message,
        'error',
      );
    }

    const { dataValues } = await Product.create({ name, price, urlImage });
    return validateResponse(httpStatusCode.created, dataValues, 'product');
  },
};
