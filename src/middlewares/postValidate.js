const Joi = require('joi');
const { categoryService } = require('../services');

const createPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required()
    .items(Joi.number().integer().required()),
}).required().messages({
  'array.includesRequiredUnknowns': 'one or more "{{#key}}" not found',
  'any.required': 'Some required fields are missing',
  'any.empty': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

module.exports = async ({ body: post }, res, next) => {
  try {
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
      const { message } = error;
      return res.status(400).json({ message });
    }
  
    return next(); 
  } catch ({ message }) {
    return res.status(500).json({ message }); 
  }
};