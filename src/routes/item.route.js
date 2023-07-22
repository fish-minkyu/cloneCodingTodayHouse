const express = require('express');
const router = express.Router();
const { Items } = require('../models');

const ItemsController = require('../controllers/item.controller');
const itemsController = new ItemsController();

// item 전체 조회
router.get('/item', itemsController.findItems);
// item 카테고리별 리스트
router.get('/item/category', itemsController.findItemsByCategoryOrQuery);
// item 하나보기
router.get('/item/:itemId', itemsController.findItemByItemId);

// 테스트용 POST 라우터 작성
router.post('/item/category', async (req, res) => {
  try {
    const { category, coverImage, brand, content, itemName, price } = req.body;
    await Items.create({
      category,
      coverImage,
      brand,
      content,
      itemName,
      price,
    });
    return res.status(200).json('상품 등록 완료');
  } catch (err) {
    console.error(err);
  }
});

// Items.category cannot be null,
// notNull Violation: Items.coverImage cannot be null,
// notNull Violation: Items.brand cannot be null,
// notNull Violation: Items.content cannot be null
module.exports = router;
