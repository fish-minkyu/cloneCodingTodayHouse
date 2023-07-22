const ItemsRepository = require('../repositories/article.repository');
const { Op } = require('sequelize');

class ItemsService {
  itemsRepository = new ItemsRepository();

  // item 전체 조회
  findItems = async () => {
    const items = await this.itemsRepository.findItems();

    return items;
  };

  // // item 리스트조회(category)
  // findItemsByCategory = async (category) => {
  //   const findItemsByCategoryData = await this.itemsRepository.findItemsByCategory(category);

  //   return findItemsByCategoryData;
  // };

  //* query or category 를 이용한 item 검색(무한 스크롤 적용)
  findItemsByCategoryOrQuery = async (query) => {
    // 카테고리만 입력 된 경우
    let queryCondition = {};
    if (query.category || !query.query) {
      queryCondition.category = { query };
      const categorySearchedData =
        await this.itemsRepository.findItemsByCategory(queryCondition);
      return categorySearchedData;

      // 쿼리만 입력 된 경우
    } else if (!query.category || query.query) {
      queryCondition.itemname = { [Op.like]: `%${query}%` };
      const querySearchedData = await this.itemsRepository.findItemsByCategory(
        queryCondition
      );
      return querySearchedData;
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
