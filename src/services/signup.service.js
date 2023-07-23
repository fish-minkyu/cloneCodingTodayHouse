const SignupRepository = require('../repositories/signup.repository');
// bcrypt import
const bcrypt = require('bcrypt');

class SignupService {
  signupRepository = new SignupRepository();

  //Service, Repository 쪽은 굳이 부분은 try Catch로 처리할 필요가 없슴니다.
  signup = async (email, nickname, password) => {
    // 소금 간 하기
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await this.signupRepository.signup(email, nickname, hashedPassword);
  };

  findUser = async (email, nickname) => {
    const user = await this.signupRepository.findUser(email, nickname);
    if (user) return user;
    else return;
  };
}

module.exports = SignupService;
