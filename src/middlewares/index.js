const jwt = require('./tokenHandle');
const loginValidate = require('./loginValidate');
const emailValidate = require('./emailValidate');
const categoryValidate = require('./categoryValidate');
const postValidate = require('./postValidate');
const verifyUserPost = require('./verifyUserPost');
const updateValidate = require('./updateValidate');

module.exports = {
  jwt,
  loginValidate,
  emailValidate,
  categoryValidate,
  postValidate,
  verifyUserPost,
  updateValidate,
};