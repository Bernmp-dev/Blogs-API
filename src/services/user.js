const sequelize = require('../transactions');

const { User } = require('../models');

const findOrCreateUser = async ({ displayName, email, password, image }) => {
  const result = await sequelize.transaction(async (t) => {
    const [user] = await User
      .findOrCreate(
        {
          where: { email, password },
          defaults: { displayName, image },
          transaction: t,
        },
        );
    return user.id;
  });

  return result;
};

const findByEmail = async ({ email }) => {
  const result = await sequelize.transaction(async (t) => {
    const user = await User
      .findOne({ where: { email }, transaction: t });
    
    return Boolean(user);
  });

  return result;
};

const listUsers = async () => {
  const result = await sequelize.transaction(async (t) => {
    const usersList = await User.findAll({
       attributes: { exclude: ['password'] }, transaction: t });
    
    return usersList;
  });

  return result;
};

module.exports = {
  findOrCreateUser,
  findByEmail,
  listUsers,
};