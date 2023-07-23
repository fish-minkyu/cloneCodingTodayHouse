const SignupService = require('../services/signup.service');
const { signupSchema } = require('../middlewares/validationMiddleware');
const CustomError = require('../middlewares/errorMiddleware');

class SignupController {
  signupService = new SignupService();

  signup = async (req, res, next) => {
    const { email, nickname, password, confirm } = req.body;

    try {
      // case. Joi schema의 형식에 맞지 않는 경우
      const { error } = signupSchema.validate(req.body);
      if (error) throw new CustomError(error.details[0].message, 400);

      // case. 비밀번호가 맞지 않는 경우
      if (password !== confirm)
        throw new CustomError('비밀번호가 일치하지 않습니다.', 400);

      // case. 이미 email이 있는 경우
      const User = await this.signupService.findUser(email, nickname);
      if (User) throw new CustomError('중복된 이메일 또는 닉네임입니다', 400);

      // 회원가입
      await this.signupService.signup(email, nickname, password);
      return res.status(201).json({ msg: '회원가입이 완료되었습니다.' });
    } catch (err) {
      throw new CustomError('오류가 발생하였습니다.', 500);
    }
  };
}

module.exports = SignupController;
