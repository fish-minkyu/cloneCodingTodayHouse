const ItemsRepository = require("../repositories/article.repository");

class ItemsService {
  itemsRepository = new ItemsRepository();

  // item 전체 조회
  findItems = async () => {
    const items = await this.itemsRepository.findItems()
    
    return items;
  };

  // item 리스트조회(category)
  findItemsByCategory = async (category) => {
    const findItemsByCategoryData = await this.itemsRepository.findItemsByCategory(category);

    return findItemsByCategoryData;
  };

  // item 하나보기
  findItemByItemId = async (itemId) =>{
    const findItemByItemIdData = await this.itemsRepository.findItemByItemId(itemId)

    return findItemByItemIdData
  }

}

module.exports = ItemsService;
