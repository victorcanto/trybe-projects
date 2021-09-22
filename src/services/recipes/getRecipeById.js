const recipesModel = require('../../models/recipes');

exports.getRecipeById = async (recipeId) => recipesModel.getRecipeById(recipeId);