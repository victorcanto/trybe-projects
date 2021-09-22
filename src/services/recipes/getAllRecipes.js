const recipesModel = require('../../models/recipes');

exports.getAllRecipes = async () => recipesModel.getAllRecipes();