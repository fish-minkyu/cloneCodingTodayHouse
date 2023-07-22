const ItemsService = require('../services/item.service');

class ItemsController {
  itemsService = new ItemsService();

  // item 전체 조회
  findItems = async (req, res, next) => {
    try {
      const items = await this.itemsService.findItems();
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  };

  // // item 카테고리별 리스트
  // findItemsByCategory = async (req, res, next) => {
  //   try {
  //     const { query } = req.params;
  //     const items = await itemsService.findItemsByCategory(query);
  //     res.status(200).json(items);
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // query or category 를 이용한 item 검색
  findItemsByCategoryOrQuery = async (req, res, next) => {
    try {
      const { query, page } = req.query;
      const items = await this.itemsService.findItemsByCategoryOrQuery(
        query,
        page
      );
      res.status(200).json({ items });
    } catch (error) {
      next(error);
    }
  };

  // item 하나보기
  findItemByItemId = async (req, res, next) => {
    try {
      const { itemId } = req.params;
      const item = await this.itemsService.findItemByItemId(itemId);
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ItemsController;
