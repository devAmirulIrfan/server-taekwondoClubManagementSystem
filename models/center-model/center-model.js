const mysql = require('mysql2/promise')

const conn = require('../../connection/dbConnection')


const pool = conn.tkdClubManagementDbConnection


async function getAllCenter(){
    const [rows] = await pool.execute("SELECT * from center")
    return rows
}

module.exports = {getAllCenter}