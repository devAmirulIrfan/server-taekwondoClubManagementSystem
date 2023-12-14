const mysql = require('mysql2/promise');

const  ppp = require('../../connection/dbConnection')

const pool = ppp.tkdClubManagementDbConnection

async function getAllStatus() {
  const [rows] = await pool.execute("SELECT * FROM status");
  return rows;
}

module.exports = {getAllStatus}
