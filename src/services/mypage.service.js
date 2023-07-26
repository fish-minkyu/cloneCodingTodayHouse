const ArticlesRepository = require('../repositories/article.repository');

class MypageService {
  ArticlesRepository = new ArticlesRepository();

  getMyArticles = async (userId) => {
    const findMyArticles = await this.ArticlesRepository.findMyArticle(userId);

    return findMyArticles;
  };
}

module.exports = MypageService;
