const { Router } = require('express');
const { userController } = require('../controllers');
const { loginValidate, jwt } = require('../middlewares');

const router = Router();

router.post('/', loginValidate, jwt.createToken, userController.login);

module.exports = router;
