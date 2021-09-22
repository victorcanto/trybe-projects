const recipeService = require('../../services/recipes');
const { StatusCode } = require('../../constants');

exports.getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await recipeService.getRecipeById(id);

    if (!recipe) {
      return res
        .status(StatusCode.NOT_FOUND)
        .json({ message: 'recipe not found' });
    }
    
    res.status(StatusCode.OK).json(recipe);
  } catch (error) {
    console.error(error);
  }
};