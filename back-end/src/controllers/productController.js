const { productService } = require('../services');

module.exports = {
  async create(req, res) {
    const { name, price, urlImage } = req.body;

    const { status, product, error } = await productService
      .create({ name, price, urlImage });

    const response = error || product;

    return res.status(status).json(response);
  },

  async index(req, res) {
    const products = await productService.index();

    return res.status(200).json(products);
  },
};
