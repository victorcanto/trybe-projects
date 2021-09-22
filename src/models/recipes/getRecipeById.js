const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

exports.getRecipeById = async (recipeId) => {
  if (!ObjectId.isValid(recipeId)) return null;

  const filter = { _id: ObjectId(recipeId) };

  return connection()
    .then((db) => db.collection('recipes')
    .findOne(filter));
}; 