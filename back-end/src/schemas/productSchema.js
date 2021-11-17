const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(6).empty().required(),
  price: Joi.number().empty().required(),
  urlImage: Joi.string().min(6).empty().required(),
});

module.exports = { productSchema };
