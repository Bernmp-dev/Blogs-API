const { categoryService } = require('../services');

const createCategory = async ({ body: category }, res) => {
  try {
    const newCategory = await categoryService.findOrCreateCategory(category);
    res.status(201).json(newCategory);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
};

const listCategories = async (_req, res) => {
  try {
    const categoriesList = await categoryService.listCategories();
    res.status(200).json(categoriesList);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
};

module.exports = {
  createCategory,
  listCategories,
};
