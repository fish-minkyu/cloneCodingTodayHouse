const express = require('express');
const router = express.Router();

const SearchController = require('../controllers/search.controller');
const searchController = new SearchController();

// 통합 검색 조회
router.get('/', searchController.totalSearchData);

module.exports = router;
