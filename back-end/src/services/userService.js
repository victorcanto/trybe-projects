const md5 = require('md5');
const { userSchema } = require('../schemas/userSchema');
const { user: User } = require('../database/models');
const { httpStatusCode, validateResponse, errors } = require('../utils');
const { checkToken } = require('../utils/jwt');

module.exports = {
  async create({ name, email, password }) {
    const { error } = userSchema.validate({ name, email, password });

    if (error) {
      return validateResponse(
        httpStatusCode.badRequest,
        error.details[0].message,
        'error',
      );
    }

    const userAlreadyExists = await User.findOne({ where: { email } });

    if (userAlreadyExists) {
      return validateResponse(httpStatusCode.conflit, errors.USER_EXISTS, 'error');
    }

    const hash = md5(password);

    const { 
      dataValues: { password: _, ...data } } = await User.create({ name, email, password: hash });

    return validateResponse(httpStatusCode.created, data, 'user');
  },

  async show({ token }) {
    const decodedUser = checkToken(token);

    return validateResponse(httpStatusCode.created, decodedUser.data, 'user');
  },
};
