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

  async show(req, res) {
    const token = req.headers.authorization;

    const { status, user, error } = await userService.show({ token });

    const response = error || user;
    return res.status(status).json(response);
  },
};
