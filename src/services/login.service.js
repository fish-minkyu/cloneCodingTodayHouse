const LoginRepository = require("../repositories/login.repository")

class LoginService {

    loginRepository = new LoginRepository()

    findUser = async (email) => {
        const user = await this.loginRepository.findUser(email)
        return user
    }
}

module.exports = LoginService;