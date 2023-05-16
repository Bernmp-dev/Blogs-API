const sequelize = require('../transactions');

const { Category } = require('../models');

const findOrCreateCategory = async ({ name }) => {
  const result = await sequelize.transaction(async (t) => {
    const [category] = await Category
      .findOrCreate({ where: { name }, transaction: t });

    return category;
  });

  return result;
};

const listCategories = async () => {
  const result = await sequelize.transaction(async (t) => {
    const categoriesList = await Category.findAll({ transaction: t });

    return categoriesList;
  });

  return result;
};

module.exports = {
  findOrCreateCategory,
  listCategories,
};