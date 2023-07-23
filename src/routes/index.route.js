const express = require('express');
const router = express.Router();

const articleRouter = require('./article.route');
// const customerServiceRouter = require('./customer.route');
const homeRouter = require('./home.route');
const itemRouter = require('./item.route');
const searchRouter = require('./search.route');
const loginRouter = require('./login.route');
const signupRouter = require('./signup.route');
const mypageRouter = require('./mypage.route');

router.use('/home', homeRouter);
router.use('/article', articleRouter);
// Item 관련
// router.use('/', itemRouter);
router.use('/item', itemRouter);
router.use('/search', searchRouter);
router.use('/mypage', mypageRouter);
// User 관련
router.use('/auth', [signupRouter, loginRouter]);
// // Collection 관련
// router.use('/api', collectionRouter)

// router.use('/api', [
//   articleRouter,
//   //   customerServiceRouter,
//   homeRouter,
//   itemRouter,
//   searchRouter,
// ]);
module.exports = router;
