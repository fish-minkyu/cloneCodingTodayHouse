const ArticlesRepository = require('../repositories/article.repository');

class ArticlesService {
  articlesRepository = new ArticlesRepository();

  createArticle = async (
    userId,
    title,
    coverimage,
    residence,
    area,
    budget,
    content,
    tags
  ) => {
    const createArticleData = this.articlesRepository.createArticle(
      userId,
      title,
      coverimage,
      residence,
      area,
      budget,
      content,
      tags
    );
    return { success: true };
  };
}

module.exports = ArticlesService;
