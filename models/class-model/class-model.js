const mysql = require('mysql2/promise')

const conn = require('../../connection/dbConnection')


const pool = conn.tkdClubManagementDbConnection


async function getAllClass(){
    const [rows] = await pool.execute(`SELECT c.id, d.dayName as day, c.startTime, c.endTime, ct.centerName, s.sessionName as session
    from 
    class AS c 
    INNER JOIN day d ON c.dayId = d.id
    INNER JOIN center as ct ON c.centerId = ct.id
    INNER JOIN session as s ON c.sessionId = s.id

    ORDER BY c.dayId,c.startTime
    `
    )
    return rows
}


async function getClassByDayId(id) {
    const dayId = id;
    const [rows] = await pool.execute(`
        SELECT c.id, d.dayName as day, c.startTime, c.endTime, ct.centerName, s.sessionName as session
        FROM 
            class AS c 
            INNER JOIN day d ON c.dayId = d.id
            INNER JOIN center as ct ON c.centerId = ct.id
            INNER JOIN session as s ON c.sessionId = s.id
        WHERE c.dayId = ?
        ORDER BY c.dayId, c.startTime
    `, [dayId]);

    return rows;
}

module.exports = {getAllClass, getClassByDayId}