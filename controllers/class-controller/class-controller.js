const  classModel = require('../../models/class-model/class-model')

async function getAllClass(req, res){
    try{
        const classes = await classModel.getAllClass();
        res.status(200).json(classes)
    }
    catch(err){
        res.status(500).send("Error fetching class")
    }
}

async function getClassByDayId(req, res){

    const dayId = req.params.id

    try{
        const classes = await classModel.getClassByDayId(dayId);
        res.status(200).json(classes)
    }
    catch(err){
        res.status(500).send("Error fetching class")
    }
}

module.exports = {getAllClass, getClassByDayId}