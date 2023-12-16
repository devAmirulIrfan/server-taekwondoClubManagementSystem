const mysql = require('mysql2/promise')
const hash = require('../../authentication/authentication-password-hash/auth-create-password-hash')
const compareHash = require('../../authentication/authentication-password-hash/auth-compare-password-hash')

const conn = require('../../connection/dbConnection')


const pool = conn.tkdClubManagementDbConnection


async function getAllParent() {
    const [rows] = await pool.execute(
        `SELECT p.id, p.email, p.address, p.parentName, p.centerId, p.contactNo, p.statusId, c.centerName, s.statusName FROM parent as p
        INNER JOIN center c ON p.centerID = c.id
        INNER JOIN status s ON p.statusId = s.id
        `       
        )
    return rows
}

async function getSingleParent(parentId){

    const [rows] = await pool.execute(
        `SELECT p.id, p.email, p.address, p.parentName, p.centerId, p.contactNo, p.statusId, c.centerName, s.statusName FROM parent as p
        INNER JOIN center c ON p.centerID = c.id
        INNER JOIN status s ON p.statusId = s.id
        WHERE p.id = ?
        `, [parentId])

        if (rows.length === 0) {
            return null; // Return null if no student with the given ID is found
        }
        return rows[0]; // Return the first (and only) result, as it's a single student
}


async function addParent(email, address, parentName, centerId, contactNo, statusId) {

    const password = 'password'

    const hashedPassword = await hash.generatePasswordHash(password)

    console.log(hashedPassword)

    await pool.execute(
        `
        INSERT INTO parent (email, address, parentName, centerId, contactNo, statusId, password)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        [email, address, parentName, centerId, contactNo, statusId, hashedPassword]
    );

}

async function updateParent(email, address, parentName, centerId, contactNo, statusId, id) {
    await pool.execute(
        `
        UPDATE parent
        SET email = ?, address = ?,  parentName = ?, centerId = ?, contactNo = ?, statusId = ?
        WHERE id = ?
        `,
        [email, address, parentName, centerId, contactNo, statusId, id]
      );

}


async function checkIfEmailBelongsToTheParent(email, id){
    const [rows] = await pool.execute("SELECT * FROM parent WHERE email = ? AND id = ?", [email, id])
    if (rows.length > 0) {
        return true
    }
    if (rows.length === 0) {
        return false
    }
}


async function checkEmailExist(email) {
    const [rows] = await pool.execute("SELECT * FROM parent WHERE email = ?", [email])
    if (rows.length > 0) {
        return true
    }
    if (rows.length === 0) {
        return false
    }
}


async function parentLoginAuthentication(inputEmailFromClient, inputPasswordFromClient){

  let isAuthenticated = false

  const [hashedPasswordFromDatabase] = await pool.execute(
    'SELECT password  FROM parent WHERE email = ?',
    [inputEmailFromClient]
  );

  const isPasswordMatch = await compareHash.comparePasswordHash(`${inputPasswordFromClient}`, `${hashedPasswordFromDatabase[0].password}`)

  if(isPasswordMatch) isAuthenticated = true

  if(!isPasswordMatch) isAuthenticated = false

  return isAuthenticated

}




module.exports = { getAllParent, getSingleParent, addParent,updateParent, parentLoginAuthentication, checkEmailExist, checkIfEmailBelongsToTheParent }