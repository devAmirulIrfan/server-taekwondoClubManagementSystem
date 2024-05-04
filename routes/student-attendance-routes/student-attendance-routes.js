const express = require('express');

const router = express.Router();


const studentAttendanceController = require('../../controllers/student-attendance-controller/student-attendance-controller')

router.get('/getAllAttendanceList', studentAttendanceController.getAllStudentAttendance)

router.get('/getAttendanceList', studentAttendanceController.getStudentAttendance)

router.post('/addStudentAttendance', studentAttendanceController.addStudentAttendance)

router.delete('/deleteStudentAttendance/:id', studentAttendanceController.deleteStudentAttendance)

module.exports = router