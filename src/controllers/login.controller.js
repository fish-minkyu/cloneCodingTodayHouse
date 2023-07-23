const LoginService = require('../services/login.service');
const { loginSchema } = require('../middlewares/validationMiddleware');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const CustomError = require('../middlewares/errorMiddleware');

class LoginController {
  loginService = new LoginService();

  login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
      // case. Joi validation
      const { error } = await loginSchema.validateAsync(req.body);
      if (error) throw new CustomError(error.details[0].message, 400);

      // DB에서 정보 찾아오기
      const user = await this.loginService.findUser(email);

      // DB에서 email을 찾지 못한 경우 처리
      if (!user) throw new CustomError("이메일 또는 비밀번호가 일치하지 않습니다.", 403)
      
      // case. req.body.email과 DB email 일치확인 and req.body.password와 DB password 일치 확인
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) throw new CustomError("이메일 또는 비밀번호가 일치하지 않습니다.", 403)

      // accessToken 생성
      const accessToken = jwt.sign({ email }, 'secretKey', { expiresIn: '1h' });

      //// refreshToken 생성
      // const refreshToken = jwt.sign({}, 'freshKey', {expiresIn: '10h'})

      res.cookie('Authorization', `Bearer ${accessToken}`);
      res.status(200).json({ nickname: user.nickname });
    } catch (err) {
      throw new CustomError("오류가 발생하였습니다.", 500)
    }
  };
}

module.exports = LoginController;
