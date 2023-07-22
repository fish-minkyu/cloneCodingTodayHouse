const { Users } = require("../models")

class SignupRepositroy {

  signup = async (email, nickname, hashedPassword) => {

    try {
      const user = await Users.create({
        email, 
        nickname,
        password: hashedPassword
      })

      return user
    } catch (err) {
      console.log('signup error - repository')
      return err
    }
  };

  findUser = async (email) => {
    const user = await Users.findOne({where: {email}})
    return user
  }
}

module.exports = SignupRepositroy;