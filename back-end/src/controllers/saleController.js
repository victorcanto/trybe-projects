const { saleService } = require('../services');

module.exports = {
  async create(req, res) {
    const { sale, products } = req.body;
    const { status, saleId, error } = await saleService.create(sale, products);
    const response = error || saleId;
    return res.status(status).json(response);
  },
  
  async getAll(req, res) {
    const { id, role } = req.user;
    let roleId;
    if (role === 'customer') {
        roleId = 'user_id';
    } else {
      roleId = 'seller_id';
    }
    const filter = { where: { [roleId]: id } };
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

  async update(req, res) {
    const { id } = req.params;
    const { sale2dot0 } = req.body;

    const { status, sale, error } = await saleService.update(id, sale2dot0);
    const response = error || sale;
    return res.status(status).json(response);
  },
};
