const jwt = require("jsonwebtoken")
const { Users } = require("../models")
const CustomError = require("../middlewares/errorMiddleware")

const jwtValidation = async (req, res, next) => {
  const { Authorization } = req.cookies

  try {
    const [tokenType, accessToken] = (Authorization ?? "").split(" ")
    // case. Bearer타입이 아니거나 accessToken이 비었다면 error
    if (tokenType !== 'Bearer' || !accessToken) 
      throw new CustomError("로그인이 필요한 기능입니다", 403)

    const isExistAccessToken = validateAccessToken(accessToken)

    // accessToken이 훼손되었다면 error
    if(!isExistAccessToken) {
      res.clearCookie('Authorization')
      throw new CustomError("로그인이 필요한 기능입니다.", 403)
    }

    const { email } = getAccessTokenPayload(accessToken)
    const user = await Users.findOne({where: {email}})

    // user 계정이 없는 경우
    if (!user) {
      res.clearCookie('Authorization')
      throw new CustomError("없는 이메일 계정입니다", 403)
    }

    res.locals.user = user
    next()
  } catch (err) {
    console.log(err)
    res.clearCookie('Authorization')
    next(err)
  }

}

function validateAccessToken(accessToken) {
  try {
    jwt.verify(accessToken, 'secretKey')
    return true
  } catch (err) {
    return false
  }
}

function getAccessTokenPayload(accessToken) {
  try {
    const payload = jwt.verify(accessToken, 'secretKey')
    return payload
  } catch (err) {
    return null
  }
}

// function validateRefreshToken(refreshToken) {
//   try {
//     jwt.verify(refreshToken, 'freshKey')
//     return true
//   } catch (err) {
//     return false
//   }
// }


module.exports = jwtValidation