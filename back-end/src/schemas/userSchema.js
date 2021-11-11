const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(12).empty().required(),
  email: Joi.string().email().empty().required(),
  password: Joi.string().min(6).empty().required(),
});

module.exports = { userSchema };
