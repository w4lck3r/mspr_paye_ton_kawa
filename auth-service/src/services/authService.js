const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
  const { username, email, password } = userData;
  const user = new User({ username, email, password });
  await user.save();
  return { id: user._id, username: user.username, email: user.email };
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid email or password');
  const isMatch = await user.matchPassword(password);
  if (!isMatch) throw new Error('Invalid email or password');

  const payload = { id: user._id, username: user.username };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

exports.getUser = async (id) => {
  const user = await User.findById(id).select('-password');
  if (!user) throw new Error('User not found');
  return user;
};
