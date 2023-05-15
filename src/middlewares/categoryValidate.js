const { createCategorySchema } = require('./Joi/schemas');

module.exports = async ({ body: category }, res, next) => {
  const { error } = createCategorySchema.validate(category);

  if (error) {
    const { message } = error.details[0];
    return res.status(400).json({ message });
  }

  next();
};