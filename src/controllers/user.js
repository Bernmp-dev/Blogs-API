const { userService } = require('../services');

const login = async ({ token }, res) => {
  try {
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: 'DataBase error' });
  }
};

const createUser = async ({ token }, res) => {
  try {
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: 'DataBase error' });
  }
};

const listUsers = async (req, res) => {
  try {
    const usersList = await userService.listUsers();
    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({ message: 'DataBase error' });
  }
};

const findUserById = async ({ params: { id } }, res) => {
  try {
    const user = await userService.findUserById(id);
    
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  login,
  createUser,
  listUsers,
  findUserById,
};
