const ItemsRepository = require('../repositories/item.repository');
const CustomError = require('../middlewares/errorMiddleware.js');
const { Op } = require('sequelize');

class ItemsService {
  itemsRepository = new ItemsRepository();

  // item 전체 조회
  findItems = async () => {
    const items = await this.itemsRepository.findItems();
    if (items.length === 0) {
      throw new CustomError('등록된 상품이 없습니다', 404);
    }
    return items;
  };

  //* query or category 를 이용한 item 검색(무한 스크롤 적용)
  findItemsByCategoryOrQuery = async (query) => {
    // 카테고리만 입력 된 경우
    if (query.category || !query.query) {
      query.category = Number(query.category);
      const categorySearchedData =
        await this.itemsRepository.findItemsByCategory(
          query.category,
          query.page
        );
      return categorySearchedData;

      // 쿼리만 입력 된 경우
    } else if (!query.category || query.query) {
      const querySearchedData = await this.itemsRepository.findItemsByQuery(
        query.query,
        query.page
      );
      return querySearchedData;
    } else if (!query.query && !query.category) {
      throw new CustomError('검색이 필요합니다', 400);
    }
  };

  // item 하나보기
  findItemByItemId = async (itemId) => {
    const findItemByItemIdData = await this.itemsRepository.findItemByItemId(
      itemId
    );

    return findItemByItemIdData;
  };
}

module.exports = ItemsService;
