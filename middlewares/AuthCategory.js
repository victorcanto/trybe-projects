const { CategorySchema } = require('../schemas');
const { ValidateError } = require('../utils');

module.exports = (req, _res, next) => {
  const { name } = req.body;
  const { error } = CategorySchema.validate({ name });

  if (error) {
    throw ValidateError(400, error.details[0].message);
  }

  next();
};