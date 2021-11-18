const { saleService } = require('../services');

module.exports = {
  async create(req, res) {
    const { id } = req.user;
    const { seller_id, products, total } = req.body;

    const { status, sales, error } = await saleService.create(id, seller_id, products, total);
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
};
