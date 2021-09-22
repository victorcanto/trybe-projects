const recipeService = require('../../services/recipes');
const { StatusCode } = require('../../constants');

exports.createRecipe = async (req, res) => {
  try {
    const recipeData = req.body;
    const { _id: userId } = req.user;
    const recipe = await recipeService.createRecipe(userId, recipeData);
    res.status(StatusCode.CREATED).json({ recipe });
  } catch (error) {
    console.error(error);
  }
};
