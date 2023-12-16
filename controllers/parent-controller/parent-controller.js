const  parentModel = require('../../models/parent-model/parent-model')



async function getAllParents(req, res){
    try{
        const parentRecords = await parentModel.getAllParent();
        res.status(200).json(parentRecords)
    }
    catch(err){
        res.status(500).send("Error fetching parents")
    }
}

async function getSingleParent(req, res){

    const parentId = req.params.id
    try{
        const parentRecord = await parentModel.getSingleParent(parentId);
        res.status(200).json(parentRecord)
    }
    catch(err){
        res.status(500).send("Error fetching parents")
    }
}

async function addParent(req, res){
    const email = req.body.email
    const address = req.body.address
    const parentName = req.body.parentName
    const centerId = req.body.centerId
    const contactNo = req.body.contactNo
    const statusId = req.body.statusId
    
    const emailExist = await parentModel.checkEmailExist(email)

    if(emailExist){
        res.status(403).send(`Email existed`)
        return
    }

    try{
        await parentModel.addParent(email, address, parentName, centerId, contactNo, statusId);
        res.status(200).json('1 parent record added')
    }
    catch(err){
        res.status(500).send('error adding parent record')
    }
}

async function updateParent(req, res){

    const id = req.params.id
    const email = req.body.email
    const address = req.body.address
    const parentName = req.body.parentName
    const centerId = req.body.centerId
    const contactNo = req.body.contactNo
    const statusId = req.body.statusId

    const isEmailBelongToTheParent = await parentModel.checkIfEmailBelongsToTheParent(email, id)

    if(!isEmailBelongToTheParent){

    const emailExist = await parentModel.checkEmailExist(email)

        if(emailExist){
            res.status(403).send(`Unable to update email already exist`)
            return
        }
    }

    try{
        await parentModel.updateParent(email, address, parentName, centerId, contactNo, statusId, id);
        res.status(200).json('1 parent record updated')
    }
    catch(err){
        res.status(500).send('error updating parent record')
    }
}


async function parentLogin(req, res){

    const email = req.body.email
    const password = req.body.password

    const accountExist = await parentModel.checkEmailExist(email)

    if(!accountExist){
        res.status(403).send(`Account does not exist`)
        return
    }

    const isParentAuthenticated = await parentModel.parentLoginAuthentication(email, password)

    if(isParentAuthenticated)  res.status(200).json('parent authenticated')

    if(!isParentAuthenticated)  res.status(200).json('parent is not authenticated')

}






module.exports = {getAllParents, getSingleParent, addParent, updateParent, parentLogin}