const LoginService = require('../services/login.service');
const { loginSchema } = require('../middlewares/validationMiddleware');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const CustomError = require('../middlewares/errorMiddleware');
require('dotenv').config();

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
      if (!user)
        throw new CustomError('이메일 또는 비밀번호가 일치하지 않습니다.', 403);

      // case. req.body.email과 DB email 일치확인 and req.body.password와 DB password 일치 확인
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword)
        throw new CustomError('이메일 또는 비밀번호가 일치하지 않습니다.', 403);

      // accessToken 생성
<<<<<<< HEAD
      const accessToken = jwt.sign(
        {
          userId: user.userId,
          nickname: user.nickname,
        },
        process.env.JWT,
        {
          expiresIn: '3h',
        }
      );
=======
      const accessToken = jwt.sign({ 
        userId: user.userId,
        nickname: user.nickname
      }, process.env.JWT, {
        expiresIn: '3h',
      });
>>>>>>> fcd13d0e5ca0f90801fa1ddf1d6d3a0932fde2cb

      //// refreshToken 생성
      // const refreshToken = jwt.sign({}, 'freshKey', {expiresIn: '10h'})

      res.cookie('Authorization', `Bearer ${accessToken}`);
      res.status(200).json({ nickname: user.nickname });
    } catch (err) {
      next(err);
    }
  };

<<<<<<< HEAD
  // 코드 수정
  checkout = async (req, res, next) => {
    const { Authorization } = req.cookies;

    try {
      const [tokenType, accessToken] = (Authorization ?? '').split(' ');

      if (!Authorization || tokenType !== 'Bearer') {
        res.status(200).json({ success: false });
      } else {
        const { userId, nickname } = jwt.verify(accessToken, process.env.JWT);
        res.status(200).json({
          success: true,
          userId,
          nickname,
        });
      }
    } catch (err) {
      next(err);
    }
  };
=======
  checkout = async (req, res, next) => {
    const { Authorization } = req.cookies

    try {
      const [tokenType, accessToken] = (Authorization ?? '').split(' ')

      const {userId, nickname} = jwt.verify(accessToken, process.env.JWT)

      if (userId && nickname) {
        res.status(200).json({
          success: true,
          userId,
          nickname
        })
      } else {
        res.json({success: false})
      }
    } catch (err) {
      next(err)
    }
  }
>>>>>>> fcd13d0e5ca0f90801fa1ddf1d6d3a0932fde2cb
}

module.exports = LoginController;
