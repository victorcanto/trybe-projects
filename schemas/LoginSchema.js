const Joi = require('joi');

const loginSchema = Joi.object({ 
  email: Joi.string().email().required().empty(),
  password: Joi.string().length(6).required().empty(),
});

module.exports = loginSchema;