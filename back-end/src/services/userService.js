const { userSchema } = require('../schemas/userSchema');
const { User } = require('../database/models');
const { httpStatusCode, validateResponse } = require('../utils');

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

    const { dataValues: { password: _, ...data } } = await User.create({ name, email, password });
    return validateResponse(httpStatusCode.created, data, 'user');
  },
};
