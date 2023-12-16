const mysql = require('mysql2/promise')

const conn = require('../../connection/dbConnection')


const pool = conn.tkdClubManagementDbConnection


async function getAllStudent() {
  const [rows] = await pool.execute(`
    SELECT
      s.id,
      s.studentName,
      DATE_FORMAT(s.birthDate, '%d-%m-%Y') AS birthDate,
      c.centerName,
      s.gradeId,
      g.gradeName,
      p.parentName,
      p.centerId,
      p.contactNo,
      st.statusName,
      st.id AS statusId
    FROM
      student AS s
      INNER JOIN grade AS g ON s.gradeId = g.id
      INNER JOIN parent AS p ON s.parentId = p.id
      INNER JOIN status AS st ON s.statusId = st.id
      INNER JOIN center AS c ON p.centerId = c.id
  `);

  return rows;
}



async function getSingleStudent(studentId) {

    const id = studentId

    const [rows] = await pool.execute(`
    SELECT s.id, s.studentName, s.birthDate, c.centerName, s.gradeId, g.gradeName, p.parentName, p.centerId, p.contactNo, st.statusName, st.id AS statusId
    FROM student AS s
    INNER JOIN grade AS g ON s.gradeId = g.id
    INNER JOIN parent AS p ON s.parentId = p.id
    INNER JOIN status AS st ON s.statusId = st.id
    INNER JOIN center AS c ON p.centerId = c.id
        WHERE s.id = ?
        `, [id])

    if (rows.length === 0) {
        return null; // Return null if no student with the given ID is found
    }
    return rows[0]; // Return the first (and only) result, as it's a single student
}

async function getStudentsByName(studentName) {
  const [rows] = await pool.execute(`
    SELECT s.id, s.studentName, c.centerName, g.gradeName, p.parentName
    FROM student AS s
    INNER JOIN grade AS g ON s.gradeId = g.id
    INNER JOIN parent AS p ON s.parentId = p.id
    INNER JOIN center AS c ON p.centerId = c.id
    WHERE s.studentName LIKE ?
    LIMIT 5
  `, [`%${studentName}%`]);

  return rows;
}


async function addStudent(studentName, birthDate, gradeId, parentId, statusId) {
  await pool.execute(
    `
    INSERT INTO student (studentName, birthDate, gradeId, parentId, statusId)
    VALUES (?, DATE_ADD(?, INTERVAL 1 DAY), ?, ?, ?)
    `,
    [studentName, birthDate, gradeId, parentId, statusId]
  );
}

  
  

async function updateStudent(studentName, birthDate, gradeId, parentId, statusId, studentId) {
  await pool.execute(
    `
    UPDATE student
    SET studentName = ?, birthDate = DATE_ADD(?, INTERVAL 1 DAY), gradeId = ?, parentId = ?, statusId = ?
    WHERE id = ?
    `,
    [studentName, birthDate, gradeId, parentId, statusId, studentId]
  );
}



module.exports = {getAllStudent, getSingleStudent, addStudent, updateStudent, getStudentsByName}