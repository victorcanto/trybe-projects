const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().empty().required(),
  password: Joi.string().min(6).empty().required(),
});

module.exports = { loginSchema };
