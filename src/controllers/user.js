const login = async ({ token }, res) => {
  try {
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: 'error' });
  }
};

module.exports = {
  login,
};
