const usersModel = require('../../models/users');

exports.createUser = async (userData) => usersModel.createUser(userData)
  .then(({ ops }) => ops[0]);
