const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

exports.addImage = async (userId, recipeId, image) => {
  if (!ObjectId.isValid(recipeId)) return null;

  const filter = { _id: ObjectId(recipeId) };
  const updateDoc = { $set: { userId, image } };
  const options = { returnOriginal: false };

  return connection()
    .then((db) => db.collection('recipes')
    .findOneAndUpdate(filter, updateDoc, options));
};
