const { LoginSchema } = require('../schemas');
const { ValidateError } = require('../utils');

module.exports = (req, _res, next) => {
  const { email, password } = req.body;
  
  const { error } = LoginSchema.validate({ email, password });
  
  if (error) {
    throw ValidateError(400, error.details[0].message);
  }

  next();
};