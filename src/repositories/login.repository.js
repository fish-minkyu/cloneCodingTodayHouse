const { Users } = require("../models")

class LoginReposiory {
    findUser = async (email) => {
        const user = await Users.findOne({where: {email}})
        return user
    }
}

module.exports = LoginReposiory;