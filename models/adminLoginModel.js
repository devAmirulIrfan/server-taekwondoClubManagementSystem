const mysql = require('mysql2/promise');

const conn = require('../connection/dbConnection')

const pool = conn.tkdClubManagementDbConnection

const jwt = require('jsonwebtoken');

async function authenticateUser(username, password) {
  // Query the database to verify the user's credentials
  const [users] = await pool.execute(
    'SELECT id, username, password FROM user_admin WHERE username = ? AND password = ?',
    [username, password]
  );

  return users.length > 0;
}

async function generateToken(username) {
  // Generate a JWT token for the logged-in user
  return jwt.sign({ username }, 'your_secret_key', { expiresIn: '1d' });
}

module.exports = { authenticateUser, generateToken };