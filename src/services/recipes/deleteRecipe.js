const recipesModel = require('../../models/recipes');

exports.deleteRecipe = async (userId, recipeId) => recipesModel.deleteRecipe(userId, recipeId);