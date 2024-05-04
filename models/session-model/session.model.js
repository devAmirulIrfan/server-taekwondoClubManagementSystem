const mysql = require('mysql2/promise')

const conn = require('../../connection/dbConnection')


const pool = conn.tkdClubManagementDbConnection


async function getAllSession(){
    const [rows] = await pool.execute("SELECT * from session")
    return rows
}

module.exports = {getAllSession}