'use strict';

module.exports = {
  up: async (queryInterface, { DataTypes })=> {
    await queryInterface.createTable('categories', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('categories');
  }
};
