// authController.js
const authModel = require('../models/adminLoginModel');

async function login(req, res) {
  const { username, password } = req.body;

  try {
    const isAuthenticated = await authModel.authenticateUser(username, password);

    if (!isAuthenticated) {
      res.status(401).json({ message: 'Authentication failed' });
      return;
    }

    const token = await authModel.generateToken(username);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { login };
