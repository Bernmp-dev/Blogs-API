const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = async (req, res, next) => {
  try {
    const userId = await userService.findOrCreateUser(req.body);
    
    const token = jwt.sign({ userId }, secret, jwtConfig);

    req.token = token;

    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
};

const authToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = jwt.verify(token, secret);

    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  createToken,
  authToken,
};
