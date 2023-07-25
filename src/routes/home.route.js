const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/home.controller');
const homeController = new HomeController();
const checkMiddleware = require("../middlewares/checkMiddleware.js")

router.get('/', checkMiddleware, homeController.getHome);

module.exports = router;
