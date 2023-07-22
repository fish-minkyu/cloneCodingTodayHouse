const express = require("express")
const router = express.Router()

const SignupController = require("../controllers/signup.controller")
const signupController = new SignupController

// 회원가입 API
router.post("/auth/signup", signupController.signup)

module.exports = router;