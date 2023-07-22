const express = require('express');
const router = express.router();

const HomeController = require('../controllers/home.controller');
const homeController = new HomeController();

router.get('/', homeController.getHome);

module.exports = router;
