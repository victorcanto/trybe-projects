const { Category } = require('../models');

const createCategory = async (name) => {
  const createdCategory = await Category.create({ name });
  return createdCategory;
};

const findAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, findAllCategories };
