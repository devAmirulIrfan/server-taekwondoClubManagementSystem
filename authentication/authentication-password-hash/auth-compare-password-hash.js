const bcrypt = require("bcrypt")
const saltRounds = 10


async function comparePasswordHash(inputPasswordFromClient, hashedPasswordFromDatabase){

        const isPasswordTrue = await bcrypt.compare(inputPasswordFromClient, hashedPasswordFromDatabase)

        console.log(`is password match: ${isPasswordTrue}`)
        
        return isPasswordTrue
        
       
}


module.exports = {comparePasswordHash}