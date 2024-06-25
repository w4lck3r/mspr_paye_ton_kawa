const AuthService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await AuthService.login(req.body);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await AuthService.getUser(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
