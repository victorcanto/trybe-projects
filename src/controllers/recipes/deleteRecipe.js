const recipeService = require('../../services/recipes');
const { StatusCode } = require('../../constants');

exports.deleteRecipe = async (req, res) => {
  try {
    const { id: recipeId } = req.params;
    const { _id } = req.user;

    const { value: deletedRecipe } = await recipeService.deleteRecipe(_id, recipeId);

    res.status(StatusCode.NO_CONTENT).json(deletedRecipe);
  } catch (error) {
    console.error(error);
  }
};