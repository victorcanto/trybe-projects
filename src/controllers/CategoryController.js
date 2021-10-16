const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const createdCategory = await CategoryService.createCategory(name);
  res.status(201).json(createdCategory);
};

const listCategories = async (_req, res) => {
  const categories = await CategoryService.findAllCategories();
  res.status(200).json(categories);
};

module.exports = {
  createCategory,
  listCategories,
};