const express = require('express');

const router = express.Router();


const studentAttendanceController = require('../../controllers/student-attendance-controller/student-attendance-controller')


router.get('/getAttendanceList/:date/:classId', studentAttendanceController.getStudentAttendance)

router.post('/addStudentAttendance', studentAttendanceController.addStudentAttendance)

router.delete('/deleteStudentAttendance/:id', studentAttendanceController.deleteStudentAttendance)

module.exports = router