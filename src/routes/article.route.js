const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware.js');
const ArticleController = require('../controllers/article.controller');
const articleController = new ArticleController();
const multerMiddleware = require('../middlewares/multerMiddleware.js');
const checkMiddleware = require('../middlewares/checkMiddleware.js');

// Article 전체 조회 (추가예정)
router.get('/', checkMiddleware, articleController.findAllArticle);
// Article 작성
router.post('/', authMiddleware, articleController.createArticle);
// Article item 검색
router.get('/item', articleController.findArticleItem);
// Article 작성 시 coverImage 추가
router.post(
  '/coverImage',
  authMiddleware,
  multerMiddleware.single('coverImage'),
  articleController.createCoverImage
);

// Article 작성 시 contentImage 추가
router.post(
  '/contentImage',
  authMiddleware,
  multerMiddleware.single('contentImage'),
  articleController.createContentImage
);

// Article 작성 시 image 삭제 기능 (추가 구현 예정)

// Article 하나 보기
router.get('/:articleId', checkMiddleware, articleController.findArticle);

// Article 수정
router.put(
  '/:articleId',
  authMiddleware,
  multerMiddleware.single('coverImage'),
  articleController.updateArticle
);
// Article 삭제
router.delete('/:articleId', authMiddleware, articleController.deleteArticle);

module.exports = router;
