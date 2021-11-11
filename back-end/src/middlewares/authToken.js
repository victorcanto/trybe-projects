const { User } = require('../database/models');
const {
  jwt: { checkToken },
  httpStatusCode,
  errors,
} = require('../utils');

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(httpStatusCode.unauthorized, errors.TOKEN_NOT_FOUND);
  }

  const decoded = checkToken(token);

  if (!decoded) {
    return res.status(httpStatusCode.unauthorized, errors.INVALID_TOKEN);
  }

  const user = await User.findOne({ where: { email: decoded.data.email } });
  req.user = user.dataValues;
  next();
};
