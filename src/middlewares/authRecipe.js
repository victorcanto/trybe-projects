const recipeSchema = require('../schemas/recipeSchema');

exports.authRecipe = async (req, res, next) => {
  const recipeData = req.body;

  const validations = recipeSchema.validateFields(recipeData);

  if (validations.error) {
    return res
      .status(validations.code)
      .json(validations.error);
  }

  next();
};
