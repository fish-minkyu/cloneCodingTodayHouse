const jwt = require('jsonwebtoken');
const CustomError = require('./errorMiddleware');
require('dotenv').config();
// const { Users } = require('../models');

const checkMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const [tokenType, accessToken] = (authorization ?? '').split(' ');

    if (!authorization || tokenType !== 'Bearer') {
      res.locals.userId = false;

      next();
    } else {
      const { userId } = getAccessTokenPayload(accessToken);

      res.locals.userId = userId;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = checkMiddleware;

function getAccessTokenPayload(accessToken) {
  try {
    const payload = jwt.verify(accessToken, process.env.JWT);
    return payload;
  } catch (err) {
    return null;
  }
}
