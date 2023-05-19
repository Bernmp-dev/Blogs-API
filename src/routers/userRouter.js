const { Router } = require('express');
const { userController } = require('../controllers');
const { emailValidate, jwt } = require('../middlewares');

const router = Router();

router.post('/', emailValidate, jwt.createToken, userController.createUser);

router.use(jwt.authToken);

router.get('/', userController.listUsers);

router.get('/:id', userController.findUserById);

router.delete('/me', userController.deleteMyUser);

module.exports = router;
