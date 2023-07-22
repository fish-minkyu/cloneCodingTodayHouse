const ItemsRepository = require('../repositories/item.repository');
const { Op } = require('sequelize');

class ItemsService {
  itemsRepository = new ItemsRepository();

  // item 전체 조회
  findItems = async () => {
    const items = await this.itemsRepository.findItems();

    return items;
  };

  //* query or category 를 이용한 item 검색(무한 스크롤 적용)
  findItemsByCategoryOrQuery = async (query, page) => {
    // 카테고리만 입력 된 경우
    if (query.category || !query.query) {
      console.log(query.category);
      query.category = Number(query.category);
      const categorySearchedData =
        await this.itemsRepository.findItemsByCategory(query.category, page);
      return categorySearchedData;

      // 쿼리만 입력 된 경우
    } else if (!query.category || query.query) {
      const querySearchedData = await this.itemsRepository.findItemsByQuery(
        query.query
      );
      return querySearchedData;
    } else if (!query.query && !query.category) {
      return;
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
