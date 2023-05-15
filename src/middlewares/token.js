const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  algorithm: 'HS256',
};

const createToken = async (req, res, next) => {
  try {
    const userId = await userService.login(req.body);

    if (!userId) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    const token = jwt.sign({ userId }, secret, jwtConfig);

    req.token = token;

    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
};

const authToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.userData = decoded.data;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido ou expirado.' });
  }
};

module.exports = {
  createToken,
  authToken,
};
