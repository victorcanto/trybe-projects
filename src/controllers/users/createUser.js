const userService = require('../../services/users');
const { StatusCode } = require('../../constants');

exports.createUser = async (req, res) => {
  const userData = req.body;

  try {
    const { password, ...user } = await userService.createUser(userData);
    res.status(StatusCode.CREATED).json({ user });
  } catch (error) {
    console.error(error);
  }
};
