const express = require("express");
const router = express.Router();

const ItemsController = require("../controllers/item.controller");
const itemsController = new ItemsController();

// item 전체 조회
router.get("/item", itemsController.findItems);
// item 카테고리별 리스트
router.get("/item/category", itemsController.findItemsByCategory);
// item 하나보기
router.get("/item/:itemId", itemsController.findItemByItemId);

module.exports = router;
