const { productSchema } = require('../schemas/productSchema');
const { product: Product } = require('../database/models');
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

    const IMAGE = 'url_image';

    const { dataValues } = await Product.create({ name, price, [IMAGE]: urlImage });
    return validateResponse(httpStatusCode.created, dataValues, 'product');
  },

  async index() {
    try {
      const products = await Product.findAll();

      return products;
    } catch (err) {
      return validateResponse(
        httpStatusCode.badRequest,
        err.message,
        'error',
      );
    }
  },
};
