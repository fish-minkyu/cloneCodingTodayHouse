const ArticlesRepository = require('../repositories/article.repository');
const ItemRepository = require('../repositories/item.repository');

class HomeService {
  articlesRepository = new ArticlesRepository();
  itemRepository = new ItemRepository();

  getHome = async () => {
    const findArticleList = await this.articlesRepository.getHomeArticle(
      userId
    );
    const itemList = await this.itemRepository.getHomeItem();

    const articleList = findArticleList.map((article) => {
      return {
        articleId: article.articleId,
        title: article.title,
        coverImage: article.coverImage,
        nickname: article['User.nickname'],
        collection: article.collection,
      };
    });

    return {
      articleList,
      itemList,
    };
  };
}

module.exports = HomeService;
