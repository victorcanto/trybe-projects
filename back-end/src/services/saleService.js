const { sale: Sale } = require('../database/models');
const { validateResponse, httpStatusCode, errors } = require('../utils');

module.exports = {
  async getAll(filter) {
    const sales = await Sale.findAll(filter);

    if (!sales) {
      return validateResponse(
        httpStatusCode.notFound,
        errors.NO_SALES_FOUND,
        'error',
      );
    }
    return validateResponse(httpStatusCode.ok, sales, 'sales');
  },
};
