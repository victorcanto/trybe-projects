const recipesModel = require('../../models/recipes');

exports.createRecipe = async (userId, recipeData) => recipesModel.createRecipe(userId, recipeData)
  .then(({ ops }) => ops[0]);