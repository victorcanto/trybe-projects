const bcrypt = require('bcrypt');

const { userSchema } = require('../schemas/userSchema');
const { user: User } = require('../database/models');
const { httpStatusCode, validateResponse } = require('../utils');

const SALT_ROUNDS = 5;

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
    
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hash = bcrypt.hashSync(password, salt);
   
    const { dataValues } = await User.create({ name, email, password: hash });
 
    return validateResponse(httpStatusCode.created, dataValues, 'user');
  },
};
