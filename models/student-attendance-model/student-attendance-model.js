const conn = require('../../connection/dbConnection')


const pool = conn.tkdClubManagementDbConnection

async function checkIfStudentExist(studentId){
    const [rows] = await pool.execute("SELECT * FROM student WHERE id = ?", [studentId])
    if (rows.length > 0) {
        return true
    }
    if (rows.length === 0) {
        return false
    }
}


async function checkIfAttendanceExist(date, classId, studentId){
    const [rows] = await pool.execute("SELECT * FROM studentAttendance WHERE date = ? AND classId = ? AND studentId = ? ", [date, classId, studentId])
    if (rows.length > 0) {
        return true
    }
    if (rows.length === 0) {
        return false
    }
}


async function addAttendance(date, classId, studentId){

    await pool.execute(
        `
        INSERT INTO studentAttendance (date, classId, studentId)
        VALUES (?, ?, ?)
        `,
        [date, classId, studentId]
    );
}


async function attendanceList(date, classId) {
    const [rows] = await pool.execute(`
        SELECT sa.id, sa.date, sa.classId, sa.studentId, s.studentName, c.centerName, g.gradeName, p.parentName
        FROM studentAttendance as sa
        INNER JOIN student s ON sa.studentId = s.id
        INNER JOIN parent p ON s.parentId = p.id
        INNER JOIN center c ON p.centerId = c.id
        INNER JOIN grade g ON s.gradeId = g.id
        WHERE sa.date = ? AND sa.classId = ?
    `, [date, classId]);
    return rows;
}


async function deleteAttendance(attendanceId) {
    const [result] = await pool.execute(
        "DELETE FROM studentAttendance WHERE id = ?",
        [attendanceId]
    );
}

module.exports = {checkIfStudentExist, checkIfAttendanceExist, addAttendance, attendanceList, deleteAttendance}