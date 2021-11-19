const { saleService } = require('../services');

module.exports = {
  async create(req, res) {
    const { id } = req.user;
    const { sale, products } = req.body;

    const { status, sales, error } = await saleService.create(sale, products, id);
    const response = error || sales;
    return res.status(status).json(response);
  },
  
  async getAll(req, res) {
    const { id } = req.user;
    const userId = 'user_id';
    const filter = { where: { [userId]: id } };
    const { status, sales, error } = await saleService.getAll(filter);
    const response = error || sales;
    return res.status(status).json(response);
  },

  async show(req, res) {
    const { id } = req.params;

    const { status, sale, error } = await saleService.show(id);
    const response = error || sale;
    return res.status(status).json(response);
  },
};
