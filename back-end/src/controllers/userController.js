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
  
    async getAll(req, res) {
      const { role } = req.params;
      let roleName = 'customer';
      if (role === 'seller') {
        roleName = 'seller';
      }
      
      const filter = { where: { role: roleName } };
      const { status, users, error } = await userService.getAll(filter);
      const response = error || users;
      return res.status(status).json(response);
  },

  async show(req, res) {
    const token = req.headers.authorization;

    const { status, user, error } = await userService.show({ token });

    const response = error || user;
    return res.status(status).json(response);
  },
};
