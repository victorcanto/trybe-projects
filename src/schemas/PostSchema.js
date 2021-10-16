const Joi = require('joi');

const postSchema = Joi.object({ 
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const postSchemaPut = Joi.object({ 
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = { postSchema, postSchemaPut };