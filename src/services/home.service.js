const ArticlesRepository = require('../repositories/article.repository');
const ItemRepository = require('../repositories/item.repository');

class HomeService {
  articlesRepository = new ArticlesRepository();
  itemRepository = new ItemRepository();

  getHome = async () => {
    articleList = await this.articlesRepository.getHomeArticle();
    itemList = await this.itemRepository.getHomeItem();

    return {
      articleList,
      itemList,
    };
  };
}

module.exports = HomeService;
