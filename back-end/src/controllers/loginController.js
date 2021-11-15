const { loginService } = require('../services');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    const { status, token, error } = await loginService.login({
      email,
      password,
    });
    const response = error || token;
    return res.status(status).json(response);
  },
};
