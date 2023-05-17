const { userService } = require('../services');

const login = async ({ token }, res) => {
  try {
    res.status(200).json({ token });
  } catch ({ message }) {
    res.status(400).json({ message });
  }
};

const createUser = async ({ token }, res) => {
  try {
    res.status(201).json({ token });
  } catch ({ message }) {
    res.status(400).json({ message });
  }
};

const listUsers = async (req, res) => {
  try {
    const usersList = await userService.listUsers();
    res.status(200).json(usersList);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
};

const findUserById = async ({ params: { id } }, res) => {
  try {
    const user = await userService.findUserById(id);
    
    res.status(200).json(user);
  } catch ({ message }) {
    res.status(404).json({ message });
  }
};

module.exports = {
  login,
  createUser,
  listUsers,
  findUserById,
};
