const { User } = require('../models');
const { jwt: { createToken }, ValidateError, ErrorMessages } = require('../utils');

const checkLoginData = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

const login = async (email, password) => {
  const user = await checkLoginData(email, password);

  if (!user) {
    throw ValidateError(400, ErrorMessages.INVALID_FIELDS);
  }

  const {
    dataValues: { password: pass, ...payload },
  } = user;
  return createToken(payload);
};

module.exports = { login };
