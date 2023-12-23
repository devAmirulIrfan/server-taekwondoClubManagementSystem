const studentAttendanceModel = require('../../models/student-attendance-model/student-attendance-model')


async function getStudentAttendance(req, res){
    
    const date = req.query.date
    const classHistoryId = req.query.classHistoryId

    console.log(date, classHistoryId)

    try{
        const attendance = await studentAttendanceModel.attendanceList(date, classHistoryId)
        res.status(200).json(attendance)
    }
    catch(err){
        res.status(403).send(err)
        res.status(500).send('error fetching attendance list') 
    }

}


async function addStudentAttendance(req,res){

    const date = req.body.date
    const classHistoryId = req.body.classHistoryId
    const studentId = req.body.studentId

    const studentExist = await studentAttendanceModel.checkIfStudentExist(studentId)
    const attendanceExist = await studentAttendanceModel.checkIfAttendanceExist(date, classHistoryId, studentId)

    if(!studentExist){
        res.status(403).send('invalid QR record')
        return
    }

    if(attendanceExist){
        res.status(403).send('student attendance already exist')
        return
    }

    try{
        await studentAttendanceModel.addAttendance(date, classHistoryId, studentId)
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