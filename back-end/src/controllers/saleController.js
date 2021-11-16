const { saleService } = require('../services');

module.exports = {
  async getAll(req, res) {
    const { id } = req.user;
    const userId = 'user_id';
    const filter = { where: { [userId]: id } };
    const { status, sales, error } = await saleService.getAll(filter);
    const response = error || sales;
    return res.status(status).json(response);
  },
};
