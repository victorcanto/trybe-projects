const recipeService = require('../../services/recipes');
const { StatusCode } = require('../../constants');

exports.editRecipe = async (req, res) => {
  try {
    const { id: recipeId } = req.params;
    const recipeData = req.body;
    const { _id } = req.user;

    const { value: editedRecipe } = await recipeService.editRecipe(_id, recipeId, recipeData);

    res.status(StatusCode.OK).json(editedRecipe);
  } catch (error) {
    console.error(error);
  }
};