const sequelize = require('../transactions');

const { User } = require('../models');

const login = async ({ email, password }) => {
  const result = await sequelize.transaction(async (t) => {
    const user = await User.findOne({ where: { email, password } }, { transaction: t });
    
    return user.id;
  });

  return result;
};

module.exports = {
  login,
};