const { categoryService } = require('../services');
const { createPostSchema } = require('./Joi/schemas');

module.exports = async ({ body: post }, res, next) => {
  const categoriesList = await categoryService.listCategories();
  
  const databaseIds = categoriesList.map(({ id }) => id);
  
  const checkIds = post.categoryIds
    .every((postId) => databaseIds.includes(postId));
  
  if (!checkIds) {
    return res.status(400).json({
       message: 'one or more "categoryIds" not found' });
  }
  
  const { error } = createPostSchema.validate(post);
  if (error) {
    const { message } = error.details[0];
    return res.status(400).json({ message });
  }

  return next();
};