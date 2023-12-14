const  statusModel = require('../../models/status-model/status-model')

async function getAllStatus(req, res){
    try{
        const status = await statusModel.getAllStatus();
        res.status(200).json(status)
    }
    catch(err){
        res.status(500).send("Error fetching statuses")
    }
}

module.exports = {getAllStatus}