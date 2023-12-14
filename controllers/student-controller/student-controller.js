const  studentModel = require('../../models/student-model/student-model')

async function getAllStudent(req, res){
    try{
        const students = await studentModel.getAllStudent();
        res.status(200).json(students)
    }
    catch(err){
        res.status(500).send("Error fetching students")
    }
}

async function getSingleStudent(req, res){

    const studentId = req.params.id
    try{
        const student = await studentModel.getSingleStudent(studentId);
        res.status(200).json(student)
    }
    catch(err){
        res.status(500).send("Error fetching student")
    }
}


async function addStudent(req, res){

    const studentName = req.body.studentName
    const birthDate = req.body.birthDate
    const gradeId = req.body.gradeId
    const parentId = req.body.parentId
    const statusId = req.body.statusId
    

    try{
        await studentModel.addStudent(studentName, birthDate, gradeId, parentId, statusId);
        // const students = await studentModel.getAllStudent()
        res.status(200).json('1 student record added')
    }
    catch(err){
        res.status(500).send("Error adding student")
    }
}

async function updateStudent(req, res){

    const studentId = req.params.id
    const studentName = req.body.studentName
    const birthDate = req.body.birthDate
    const gradeId = req.body.gradeId
    const parentId = req.body.parentId
    const statusId = req.body.statusId

    try{
        await studentModel.updateStudent(studentName, birthDate, gradeId, parentId, statusId, studentId);
        // const students = await studentModel.getAllStudent()
        res.status(200).json('1 student record updated')
    }
    catch(err){
        res.status(500).send("Error updating student")
    }
}

module.exports = {getAllStudent, getSingleStudent, addStudent, updateStudent}