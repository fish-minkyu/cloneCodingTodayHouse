const SignupRepository = require("../repositories/signup.repository")
// bcrypt import
const bcrypt = require("bcrypt")

class SignupService {

  signupRepository = new SignupRepository()

  signup = async (email, nickname, password) => {

    try {
       // 소금 간 하기
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    await this.signupRepository.signup(email, nickname, hashedPassword)

    } catch (err) {
      console.log('sign up error - service')
      return err
    }
  };

  findUser = async (email) => {
    const user = await this.signupRepository.findUser(email)
    if (user) return user
    else return;
  }
};

module.exports = SignupService;