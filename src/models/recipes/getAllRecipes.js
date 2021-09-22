const { connection } = require('../connection');

exports.getAllRecipes = async () => connection()
  .then((db) => db.collection('recipes').find().toArray());