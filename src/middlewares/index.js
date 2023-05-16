const jwt = require('./token');
const loginValidate = require('./loginValidate');
const emailValidate = require('./emailValidate');
const categoryValidate = require('./categoryValidate');
const postValidate = require('./postValidate');

module.exports = {
  jwt,
  loginValidate,
  emailValidate,
  categoryValidate,
  postValidate,
};