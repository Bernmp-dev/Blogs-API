const { createUserSchema } = require('./Joi/schemas');
const { userService } = require('../services');

module.exports = async ({ body }, res, next) => {
  const { error } = createUserSchema.validate(body);

  if (error) {
    const { message } = error.details[0];
    return res.status(400).json({ message });
  }

  const emailRegistered = await userService.findByEmail(body);

  if (emailRegistered) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return next();
};
