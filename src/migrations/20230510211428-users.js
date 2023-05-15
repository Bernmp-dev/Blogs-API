'use strict';

module.exports = {
  up: async (queryInterface, { DataTypes })=> {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      displayName:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'display_name'
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  }
};
