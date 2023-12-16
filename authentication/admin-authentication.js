const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed: No token provided.' });
  }

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) {
      console.log(err)
      return res.status(403).json({ message: 'Authentication failed: Token is invalid.' });
  }

    req.user = user;
    next();
  });
}

module.exports = authenticateJWT;
