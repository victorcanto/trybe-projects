const { LoginService } = require('../services');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await LoginService.login(email, password);
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    next(err);
  }
};