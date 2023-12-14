const bcrypt = require("bcrypt")


async function generatePasswordHash(password){

        const saltRounds = 10

        const hashedPassword = await bcrypt.hash(password, saltRounds)

        return hashedPassword
       
}


module.exports = {generatePasswordHash}