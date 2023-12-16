const mysql = require('mysql2/promise')

const conn = require('../../connection/dbConnection')


const pool = conn.tkdClubManagementDbConnection


async function getAllClassHistory(){
    const [rows] = await pool.execute(`
    SELECT 
    ch.id,
    ch.date, 
    d.dayName as day, 
    c.startTime, 
    c.endTime, 
    ct.centerName, 
    s.sessionName as session
    
    FROM classHistory as ch

    INNER JOIN class c ON ch.classId = c.id
    INNER JOIN day d ON c.dayId = d.id
    INNER JOIN center as ct ON c.centerId = ct.id
    INNER JOIN session as s ON c.sessionId = s.id

    ORDER BY

    ch.date, c.dayId, c.startTime
    `
    )
    return rows
}

async function checkIfRecordInClassHistoryExist(classId, classDate) {
    const [rows] = await pool.execute(`
        SELECT 
            ch.id,
            ch.date, 
            d.dayName as day, 
            c.startTime, 
            c.endTime, 
            ct.centerName, 
            s.sessionName as session
            
        FROM classHistory as ch

        INNER JOIN class c ON ch.classId = c.id
        INNER JOIN day d ON c.dayId = d.id
        INNER JOIN center as ct ON c.centerId = ct.id
        INNER JOIN session as s ON c.sessionId = s.id

        WHERE 
            ch.classId = ? 
            AND 
            ch.date = ?
    `, [classId, classDate]);

    return rows.length > 0;
}


async function addClass(classId, date){

    await pool.execute(
        `
        INSERT INTO classHistory (classId, date)
        VALUES (?, ?)
        `,
        [classId, date]
    );
}

module.exports = {getAllClassHistory, checkIfRecordInClassHistoryExist, addClass}

