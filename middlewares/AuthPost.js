const { PostSchema: { postSchema, postSchemaPut } } = require('../schemas');
const ValidateError = require('../utils/ValidateError');

module.exports = {
  isPost(req, _res, next) {
    const { title, content, categoryIds } = req.body;
    const { error } = postSchema.validate({ title, content, categoryIds });
  
    if (error) {
      throw ValidateError(400, error.details[0].message);
    }
  
    next();
  },

  isPut(req, _res, next) {
    const { title, content, categoryIds } = req.body;
    
    if (categoryIds) {
      throw ValidateError(400, 'Categories cannot be edited');
    }
    
    const { error } = postSchemaPut.validate({ title, content });

    if (error) {
      throw ValidateError(400, error.details[0].message);
    }

    next();
  },
};