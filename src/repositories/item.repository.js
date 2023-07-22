const { Items } = require('../models');
const { Op } = require('sequelize');

// 아이템 전체조회 리스트보기 하나보기
class ItemRepository {
  findItems = async () => {
    const items = await Items.findAll({
      attributes: ['itemId', 'itemName', 'price'],
      order: [['itemId', 'ASC']],
    });

    return items;
  };

  // 카테고리로 상품 검색(무한 스크롤 적용)
  findItemsByCategoryOrQuery = async (query) => {
    const itemList = await Items.findAll({
      where: query,
      attributes: ['itemId', 'itemName', 'price'],
      limit: 12,
      offset: 12,
    });

    return itemList;
  };

  //   // 사용자 쿼리로 상품 검색
  //   findItemsByQuery = async (query) => {
  //     const itemList = await Items.findAll({
  //       attributes: ['itemId', 'itemname', 'price'],
  // where: {
  //   itemname: {
  //     [Op.like]: `%${query}%`,
  //   },
  // },
  //       limit: 6,
  //     });
  //     return itemList;
  //   };

  findItemByItemId = async (itemId) => {
    const itemList = await Items.findOne({ where: { itemId } });

    return itemList;
  };

  getHomeItem = async () => {
    const itemList = await Items.findall({
      attributes: ['itemId', 'itemName', 'coverImage', 'price'],
      limit: 10,
    });
    return itemList;
  };
}

module.exports = ItemRepository;
