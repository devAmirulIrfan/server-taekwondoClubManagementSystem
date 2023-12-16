const mysql = require('mysql2/promise');

const  ppp = require('../connection/dbConnection')

const pool = ppp.pool

async function getAllTshirts() {
  const [rows] = await pool.execute("SELECT * FROM test");
  return rows;
}

async function insertTshirt(name) {
  await pool.execute("INSERT INTO test(name) VALUES(?)", [name]);
}

async function updateTshirt(id, name) {
  await pool.execute("UPDATE test SET name = ? WHERE id = ?", [name, id]);
}

async function deleteTshirt(id) {
  await pool.execute("DELETE FROM test WHERE id = ?", [id]);
}

module.exports = { getAllTshirts, insertTshirt, updateTshirt, deleteTshirt };
