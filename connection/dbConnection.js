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


//PRODUCTION

const tkdClubManagementDbConnection = mysql.createPool({
  host: "sql12.freemysqlhosting.net",
  user: "sql12670739",
  password: "S2dgdaZtQp",
  database: "sql12670739",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


//DEVELOPMENT

// const tkdClubManagementDbConnection = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "tkdclubmanagementdb",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });


module.exports = {pool, tkdClubManagementDbConnection}