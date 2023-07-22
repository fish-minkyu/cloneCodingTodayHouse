const express = require('express');
const router = express.Router();

const articleRouter = require('./article.route');
// const customerServiceRouter = require('./customer.route');
const homeRouter = require('./home.route');
const itemRouter = require('./item.route');
const loginRouter = require('./login.route');
const searchRouter = require('./search.route');
const signupRouter = require('./signup.route');

router.use('/auth', [signupRouter, loginRouter]);
router.use('/article', articleRouter);
router.use('/home', homeRouter);
router.use('/item', itemRouter);
router.use('/search', searchRouter);

// router.use('/api', [
//   articleRouter,
//   //   customerServiceRouter,
//   homeRouter,
//   itemRouter,
//   searchRouter,
// ]);
module.exports = router;
