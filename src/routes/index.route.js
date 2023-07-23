const express = require('express');
const router = express.Router();

const articleRouter = require('./article.route');
const itemRouter = require('./item.route');
const homeRouter = require('./home.route');
const loginRouter = require('./login.route')
const signupRouter = require('./signup.route')
// const collectionRouter = require('./collection.route')

// Article 관련
router.use('/home', homeRouter);
router.use('/article', articleRouter);
// Item 관련
router.use('/', itemRouter);
// User 관련
router.use('/auth', loginRouter)
router.use('/auth', signupRouter)
// // Collection 관련
// router.use('/api', collectionRouter)


module.exports = router;
