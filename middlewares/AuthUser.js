const { UserSchema } = require('../schemas');
const ValidateError = require('../utils/ValidateError');

module.exports = (req, _res, next) => {
  const { displayName, email, password, image = 'null' } = req.body;
  const { error } = UserSchema.validate({ displayName, email, password, image });
  
  if (error) {
   throw ValidateError(400, error.details[0].message);
  }
  
  next();
};