const jwt = require('jsonwebtoken');
const CustomError = require('./errorMiddleware');
require('dotenv').config();
// const { Users } = require('../models');

<<<<<<< HEAD
const checkMiddleware = async (req, res, next) => {
  const { Authorization } = req.cookies;
=======

const checkMiddleware = async (req, res, next) => {
  const { Authorization } = req.cookies
>>>>>>> fcd13d0e5ca0f90801fa1ddf1d6d3a0932fde2cb

  try {
    const [tokenType, accessToken] = (Authorization ?? '').split(' ');

<<<<<<< HEAD
    if (!Authorization || tokenType !== 'Bearer') {
      res.locals.userId = undefined;

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
=======
    if (!Authorization || tokenType !== "Bearer") {
      res.locals.userId = 0
  
      next()
    } else {
      const { userId } = getAccessTokenPayload(accessToken)

      res.locals.userId = userId
  
      next()
    }
  } catch (err) {
    next(err)
  }
};

module.exports = checkMiddleware

>>>>>>> fcd13d0e5ca0f90801fa1ddf1d6d3a0932fde2cb

function getAccessTokenPayload(accessToken) {
  try {
    const payload = jwt.verify(accessToken, process.env.JWT);
    return payload;
  } catch (err) {
    return null;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> fcd13d0e5ca0f90801fa1ddf1d6d3a0932fde2cb
