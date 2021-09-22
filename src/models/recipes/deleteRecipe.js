const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

exports.deleteRecipe = async (userId, recipeId) => {
  if (!ObjectId.isValid(recipeId)) return null;

  const filter = { _id: ObjectId(recipeId), userId };

  return connection()
    .then((db) => db.collection('recipes')
    .findOneAndDelete(filter));
}; 