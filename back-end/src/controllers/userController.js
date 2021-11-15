const { userService } = require('../services');

module.exports = {
  async create(req, res) {
    const { name, email, password } = req.body;
    const { status, user, error } = await userService.create({
      name,
      email,
      password,
    });

    const response = error || user;
    return res.status(status).json(response);
  },
};
