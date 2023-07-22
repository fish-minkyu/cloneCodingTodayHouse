const { Items } = require("../models");
const { Op } = require("sequelize");

// 아이템 전체조회 리스트보기 하나보기
class ItemRepository {
  findItems = async () => {
    const items = await Items.findAll({
      attributes: ["itemId", "itemName", "price"],
      order: [["itemId", "ASC"]],
    });

    return items;
  };

  findItemsByCategory = async (category) => {
    const items = await Items.findAll({ 
        where: { category },
        attributes: ["itemId", "itemName", "price"]
     });

    return items;
  };

  findItemByItemId = async (itemId) => {
    const item = await Items.findOne({ where: { itemId } });

    return item;
  };
}

module.exports = ItemRepository;
