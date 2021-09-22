const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

exports.editRecipe = async (userId, recipeId, { name, ingredients, preparation }) => {
  if (!ObjectId.isValid(recipeId)) return null;

  const filter = { _id: ObjectId(recipeId) };
  const updateDoc = { $set: { name, ingredients, preparation, userId } };
  const options = { returnOriginal: false };

  return connection()
    .then((db) => db.collection('recipes')
    .findOneAndUpdate(filter, updateDoc, options));
}; 