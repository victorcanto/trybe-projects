const userSchema = require('../schemas/userSchema');
const userService = require('../services/users');

exports.authUser = async (req, res, next) => {
  const userData = req.body;
  const allUsers = await userService.getAllUsers();
  const validations = userSchema.validate(userData, allUsers);

  if (validations.error) {
    return res.status(validations.code).json(validations.error);
  }
  next();
};