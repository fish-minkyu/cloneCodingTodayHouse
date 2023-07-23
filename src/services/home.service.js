const ArticlesRepository = require('../repositories/article.repository');
const ItemRepository = require('../repositories/item.repository');

class HomeService {
  articlesRepository = new ArticlesRepository();
  itemRepository = new ItemRepository();

  getHome = async () => {
    const articleList = await this.articlesRepository.getHomeArticle();
    const itemList = await this.itemRepository.getHomeItem();

    return {
      articleList,
      itemList,
    };
  };
}

module.exports = HomeService;
