const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../model/userModel');

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    console.log(token)

    if (!token) {
      return res.status(401).json({ success: false, msg: 'No token provided' });
    }

    const data = jwt.verify(token, process.env.JWT_TOKEN);

    console.log(data)
    const user = await User.findByPk(data.id);

    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, msg: 'Invalid or expired token' });
  }
};

module.exports = auth;
