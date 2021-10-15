const { User } = require('../models');
const { jwt: { createToken }, ValidateError, ErrorMessages } = require('../utils');

const userAlreadyRegistered = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async (userData) => {
  const user = await userAlreadyRegistered(userData.email);

  if (user) {
    throw ValidateError(409, ErrorMessages.USER_ALREADY_REGISTERED);
  }

  await User.create(userData);
  const { password, ...payload } = userData;
  return createToken(payload);
};

const findAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const findUserById = async (id) => {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });

  if (!user) {
    throw ValidateError(404, ErrorMessages.USER_NOT_EXISTS);
  }
  
  return user;
};

const deleteMe = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
  deleteMe,
};
