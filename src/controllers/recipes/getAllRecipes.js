const recipeService = require('../../services/recipes');
const { StatusCode } = require('../../constants');

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeService.getAllRecipes();
    res.status(StatusCode.OK).json(recipes);
  } catch (error) {
    console.error(error);
  }
};