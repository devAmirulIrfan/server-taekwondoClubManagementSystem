const mysql = require('mysql2/promise')

const conn = require('../../connection/dbConnection')


const pool = conn.tkdClubManagementDbConnection


async function getAllGrade(){
    const [rows] = await pool.execute("SELECT * from grade")
    return rows
}

module.exports = {getAllGrade}