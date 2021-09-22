const { createRecipe } = require('./createRecipe');
const { getAllRecipes } = require('./getAllRecipes');
const { getRecipeById } = require('./getRecipeById');
const { editRecipe } = require('./editRecipe');
const { deleteRecipe } = require('./deleteRecipe');
const { addImage } = require('./addImage');

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  editRecipe,
  deleteRecipe,
  addImage,
};