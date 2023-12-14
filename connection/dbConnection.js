const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "club_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


const tkdClubManagementDbConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tkdclubmanagementdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


module.exports = {pool, tkdClubManagementDbConnection}