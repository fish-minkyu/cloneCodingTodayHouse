const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware.js');
const MypageController = require('../controllers/mypage.controller.js');
const mypageController = new MypageController();

const router = express.Router();

router.get('/', authMiddleware, mypageController.getMyArticles);

module.exports = router;
