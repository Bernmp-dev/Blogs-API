const { User, sequelize } = require('../models');

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

const findUserById = async (id) => {
  const result = await sequelize.transaction(async (t) => {
    const user = await User.findByPk(id, {
       attributes: { exclude: ['password'] }, transaction: t });

    return user;
  });

  if (result === null) {
    throw new Error('User does not exist');
  }

  return result;
};

const deleteMyUser = async (id) => {
  sequelize.transaction(async (t) => {
    await User.destroy({ where: { id }, transaction: t });
  });
};

module.exports = {
  findOrCreateUser,
  findByEmail,
  listUsers,
  findUserById,
  deleteMyUser,
};