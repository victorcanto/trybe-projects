const bcrypt = require('bcrypt');

const { User } = require('../database/models');
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

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return validateResponse(httpStatusCode.badRequest, errors.INVALID_FIELDS, 'error');
    }

    const passwordCheck = bcrypt.compareSync(password, user.password)

    if(passwordCheck) {
      const {
        dataValues: { password: _, ...payload },
      } = user;
  
      const token = createToken(payload);
      return validateResponse(httpStatusCode.ok, token, 'token');
    }
     
    return validateResponse(httpStatusCode.badRequest, errors.INVALID_PASSWORD, 'error');
  },
};
