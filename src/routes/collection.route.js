const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware.js");
const CollectionController = require("../controllers/collection.controller.js");
const collectionController = new CollectionController();

// 책갈피 저장
router.post('/',authMiddleware, collectionController.createCollection);

// 책갈피 불러오기
router.get('/',authMiddleware,collectionController.findAllCollection)

// 책갈피 삭제하기
router.delete('/',authMiddleware,collectionController.deleteCollection)

module.exports = router
