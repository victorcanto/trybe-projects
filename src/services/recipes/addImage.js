const recipesModel = require('../../models/recipes');

exports.addImage = async (userId, recipeId, image) => recipesModel
  .addImage(userId, recipeId, image);