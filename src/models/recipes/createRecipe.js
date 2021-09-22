const { connection } = require('../connection');

exports.createRecipe = async (userId, recipeData) => connection()
  .then((db) => db.collection('recipes')
  .insertOne({ ...recipeData, userId }));
