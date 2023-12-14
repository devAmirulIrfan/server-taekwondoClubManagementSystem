const  gradeModel = require('../../models/grade-model/grade-model')

async function getAllGrade(req, res){
    try{
        const grades = await gradeModel.getAllGrade();
        res.status(200).json(grades)
    }
    catch(err){
        res.status(500).send("Error fetching grades")
    }
}

module.exports = {getAllGrade}