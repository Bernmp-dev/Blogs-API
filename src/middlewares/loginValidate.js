const { loginSchema } = require('./Joi/schemas');

module.exports = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    const { message } = error.details[0];
    return res.status(400).json({ message });
  }

  return next();
};
