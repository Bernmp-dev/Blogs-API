const { Router } = require('express');
const { categoryController } = require('../controllers');
const { categoryValidate, jwt } = require('../middlewares');

const router = Router();

router.use(jwt.authToken);

router.post('/', categoryValidate, categoryController.createCategory);

router.get('/', categoryController.listCategories);

module.exports = router;
