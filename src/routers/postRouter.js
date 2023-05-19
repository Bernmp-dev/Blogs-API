const { Router } = require('express');
const { blogPostController } = require('../controllers');
const { postValidate, verifyUserPost, updateValidate, jwt } = require('../middlewares');

const router = Router();

router.use(jwt.authToken);

router.get('/search', blogPostController.listBySearch);

router.get('/', blogPostController.listPosts);

router.get('/:id', blogPostController.listPostsById);

router.post('/', postValidate, blogPostController.createPost);

router.put('/:id', verifyUserPost, updateValidate, blogPostController.updatePost);

router.delete('/:id', verifyUserPost, blogPostController.deletePost);

module.exports = router;
