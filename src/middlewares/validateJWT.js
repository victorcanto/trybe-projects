const jwt = require('jsonwebtoken');
const { StatusCode, SECRET } = require('../constants');
const userService = require('../services/users');

exports.validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(StatusCode.UNAUTHORIZED)
      .json({ message: 'missing auth token' });
  }

  try {
    const { data: { email } } = jwt.verify(token, SECRET);
    const user = await userService.findUser(email);
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(StatusCode.UNAUTHORIZED)
      .json({ message: 'jwt malformed' });
  }
};