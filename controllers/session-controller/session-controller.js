const  sessionModel = require('../../models/session-model/session.model')

async function getAllSession(req, res){
    try{
        const session = await sessionModel.getAllSession()
        res.status(200).json(session)
    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports = {getAllSession}