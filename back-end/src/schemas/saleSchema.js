const Joi = require('joi');

const saleSchema = Joi.object({
  userId: Joi.number().empty().required(),
  sellerId: Joi.number().empty().required(),
  totalPrice: Joi.number().empty().required(),
  deliveryAddress: Joi.string().empty().required(),
  deliveryNumber: Joi.string().empty().required(),
  saleDate: Joi.date().empty().required(),
  status: Joi.string().empty().required(),
});

module.exports = { saleSchema };
