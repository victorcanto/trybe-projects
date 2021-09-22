const recipesModel = require('../../models/recipes');

exports.editRecipe = async (userId, recipeId, recipeData) => recipesModel
  .editRecipe(userId, recipeId, recipeData);