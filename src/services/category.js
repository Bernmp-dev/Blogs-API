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

module.exports = {
  findOrCreateCategory,
};