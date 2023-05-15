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

module.exports = {
  login,
  createUser,
};
