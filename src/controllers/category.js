const { categoryService } = require('../services');

const createCategory = async ({ body: category }, res) => {
  try {
    const newCategory = await categoryService.findOrCreateCategory(category);
    res.status(201).json(newCategory);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
};

module.exports = {
  createCategory,
};
