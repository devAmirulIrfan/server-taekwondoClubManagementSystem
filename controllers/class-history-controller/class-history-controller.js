const  classHistoryModel = require('../../models/class-history-model/class-history-model')

async function getAllClassHistory(req, res){
    try{
        const classHistory = await classHistoryModel.getAllClassHistory();
        res.status(200).json(classHistory)
    }
    catch(err){
        res.status(500).send("Error fetching class History")
    }
}

async function addClass(req, res){
    const classId = req.body.classId
    const date = req.body.date

    const recordExist = await classHistoryModel.checkIfRecordInClassHistoryExist(classId,date)

    if(recordExist){
        res.status(403).send(`Class already existed`)
        return
    }

    try{
        await classHistoryModel.addClass(classId, date)
        res.status(200).json('1 class record added')
    }
    catch(err){
        res.status(500).send('error adding class record')
    }
}

module.exports = {getAllClassHistory, addClass}
