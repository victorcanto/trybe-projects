const md5 = require('md5');
const { user: User } = require('../database/models');
const { loginSchema } = require('../schemas/loginSchema');
const {
  jwt: { createToken },
  validateResponse,
  httpStatusCode,
  errors,
} = require('../utils');

module.exports = {
  async login({ email, password }) {
    const { error } = loginSchema.validate({ email, password });

    if (error) {
      return validateResponse(
        httpStatusCode.unauthorized,
        error.details[0].message,
        'error',
      );
    }

    const hash = md5(password);

    const user = await User.findOne({ where: { email, password: hash } });

    if (!user) {
      return validateResponse(httpStatusCode.notFound, errors.INVALID_FIELDS, 'error');
    }

    const {
      dataValues: { password: _, ...payload },
    } = user;

    const token = createToken(payload);
    return validateResponse(httpStatusCode.ok, token, 'token');
  },
};
