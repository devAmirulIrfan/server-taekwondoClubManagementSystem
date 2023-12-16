const  gradeModel = require('../../models/center-model/center-model')

async function getAllCenter(req, res){
    try{
        const centers = await gradeModel.getAllCenter();
        res.status(200).json(centers)
    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports = {getAllCenter}