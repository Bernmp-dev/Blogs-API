const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

module.exports = new Sequelize(config[env]);
