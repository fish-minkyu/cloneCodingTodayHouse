const LoginService = require("../services/login.service")
const { loginSchema } = require("../middlewares/validationMiddleware")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

class LoginController {

    loginService = new LoginService()

    login = async (req, res, next) => {
        const {email, password} = req.body

        try {
            // case. Joi validation
            const { error } = await loginSchema.validateAsync(req.body)
            if (error) {
                return res.status(412).json({errorMessage: error.details[0].message})
            }

            // DB에서 정보 찾아오기
            const user = await this.loginService.findUser(email)

            if (!user) {
                // DB에서 유저를 찾지 못한 경우 처리
                return res.status(400).json({ errorMessage: '유저를 찾을 수 없습니다.' });
            }
            // case. req.body.email과 DB email 일치확인 and req.body.password와 DB password 일치 확인
            // DB애 등록되지 않는 email이면, 해당 if문에서 error
            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) {
                return res.status(400).json({ errorMessage: '비밀번호가 일치하지 않습니다.' });
            }

            // accessToken 생성
            const accessToken = jwt.sign({email}, 'secretKey', {expiresIn: '1h'})
            
            //// refreshToken 생성
            // const refreshToken = jwt.sign({}, 'freshKey', {expiresIn: '10h'})

            res.cookie('Authorization', `Bearer ${accessToken}`)
            res.status(200).json({nickname: user.nickname})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = LoginController;
