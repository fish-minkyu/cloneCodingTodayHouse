const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware.js');
const LoginController = require('../controllers/login.controller');
const loginController = new LoginController();

// 로그인 API
router.post('/login', loginController.login);

module.exports = router;
