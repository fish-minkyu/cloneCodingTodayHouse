const express = require('express');
const router = express.Router();

const SearchController = require('../controllers/search.controller');
const searchController = new SearchController();

// 전체 조회 (추가예정)
router.get('/', searchController.searchData);

// Article 작성
// router.post('/', articleController.createArticle);
// // Article 하나 보기
// router.get('/:articleId', articleController.findArticle);
// // Article 수정
// router.put('/:articleId', articleController.updateArticle);
// // Article 삭제
// router.delete('/:articleId', articleController.deleteArticle);

module.exports = router;
