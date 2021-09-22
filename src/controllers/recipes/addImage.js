const recipeService = require('../../services/recipes');
const { StatusCode } = require('../../constants');

exports.addImage = async (req, res) => {
  try {
    const { id: recipeId } = req.params;
    const { _id: userId } = req.user;
    
    const imageUrl = `localhost:3000/${req.file.path}`;
    
    const { value: updatedRecipe } = await recipeService.addImage(userId, recipeId, imageUrl);
    res.status(StatusCode.OK).json(updatedRecipe);
  } catch (error) {
    console.log(error);
  }
};
