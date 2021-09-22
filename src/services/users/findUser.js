 const usersModel = require('../../models/users');
 
 exports.findUser = async (email) => usersModel.findUser(email);
