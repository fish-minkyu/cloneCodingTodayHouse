const express = require('express');
const router = express.Router();

const ArticleController = require('../controllers/article.controller');
const articleController = new ArticleController();

// Article 전체 조회 (추가예정)
router.get('/', articleController.findAllArticle);
// Article 작성
router.post('/', articleController.createArticle);
// Article 하나 보기
router.get('/:articleId', articleController.findArticle);

// Article item 검색
router.get('/item', articleController.findArticleItem);

// Article 수정
router.put('/:articleId', articleController.updateArticle);
// Article 삭제
router.delete('/:articleId', articleController.deleteArticle);

module.exports = router;
