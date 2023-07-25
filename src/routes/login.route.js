const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login.controller');
const loginController = new LoginController();
const authMiddleware = require('../middlewares/authMiddleware.js');

// 로그인 API
router.post('/login', loginController.login);
router.get('/checkout', authMiddleware, loginController.checkout)

module.exports = router;
