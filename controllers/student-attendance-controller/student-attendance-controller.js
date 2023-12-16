const studentAttendanceModel = require('../../models/student-attendance-model/student-attendance-model')


async function getStudentAttendance(req, res){
    const date = req.params.date
    const classId = req.params.classId

    try{
        const attendance = await studentAttendanceModel.attendanceList(date, classId)
        res.status(200).json(attendance)
    }
    catch(err){
        res.status(500).send('error fetching attendance list') 
    }

}


async function addStudentAttendance(req,res){

    const date = req.body.date
    const classId = req.body.classId
    const studentId = req.body.studentId

    const studentExist = await studentAttendanceModel.checkIfStudentExist(studentId)
    const attendanceExist = await studentAttendanceModel.checkIfAttendanceExist(date, classId, studentId)

    if(!studentExist){
        res.status(403).send('invalid QR record')
        return
    }

    if(attendanceExist){
        res.status(403).send('student attendance already exist')
        return
    }

    try{
        await studentAttendanceModel.addAttendance(date, classId, studentId)
        res.status(200).json('success')
    }
    catch{
        res.status(500).send('error adding student attendance')
    }

}


async function deleteStudentAttendance(req, res){
    
    const attendanceId = req.params.id

    try{
        await studentAttendanceModel.deleteAttendance(attendanceId)
        res.status(200).json('1 attendance record deleted')
    }
    catch(err){
        res.status(500).send('error deleting attendance')
    }

}


module.exports = {getStudentAttendance, addStudentAttendance, deleteStudentAttendance}