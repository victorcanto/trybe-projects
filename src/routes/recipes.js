const { Router } = require('express');
const { validateJWT, authRecipe } = require('../middlewares');
const recipesController = require('../controllers/recipes');

const { upload } = require('../services/recipes');

const router = Router();

router.post('/', validateJWT, authRecipe, recipesController.createRecipe);

router.get('/', recipesController.getAllRecipes);

router.get('/:id', recipesController.getRecipeById);

router.put('/:id', validateJWT, authRecipe, recipesController.editRecipe);

router.delete('/:id', validateJWT, recipesController.deleteRecipe);

router.put('/:id/image/', validateJWT, upload.single('image'), recipesController.addImage);

module.exports = router;