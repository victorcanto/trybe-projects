const { User } = require('../models');
const { jwt: { checkToken }, ValidateError, ErrorMessages } = require('../utils');

module.exports = async (req, _res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return next(ValidateError(401, ErrorMessages.TOKEN_NOT_FOUND));
  }

  try {
    const decoded = checkToken(token);
    const user = await User.findOne({ where: { email: decoded.payload.email } });
    req.user = user.dataValues;
    next();
  } catch (err) {
    next(ValidateError(401, ErrorMessages.INVALID_TOKEN));
  }
};