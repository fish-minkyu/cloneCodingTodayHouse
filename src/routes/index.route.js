const express = require('express');
const router = express.Router();

const articleRouter = require('./article.route');
const itemRouter = require('./item.route');
const homeRouter = require('./home.route');
// const collectionRouter = require('./collection.route')

// Article 관련
router.use('/home', homeRouter);
router.use('/api', articleRouter);
// // Item 관련
router.use('/', itemRouter);
// // Collection 관련
// router.use('/api', collectionRouter)

module.exports = router;
