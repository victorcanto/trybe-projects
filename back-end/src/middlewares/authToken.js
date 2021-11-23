const { user: User } = require('../database/models');
const {
  jwt: { checkToken },
  httpStatusCode,
  errors,
} = require('../utils');

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res
      .status(httpStatusCode.unauthorized)
      .json({ message: errors.TOKEN_NOT_FOUND });
  }

  try {
    const decoded = checkToken(token);
    const user = await User.findOne({ where: { email: decoded.data.email } });
    req.user = user.dataValues;
    next();
  } catch (error) {
    return res
      .status(httpStatusCode.unauthorized)
      .json({ message: errors.INVALID_TOKEN });
  }
};
