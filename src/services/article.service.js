const ArticlesRepository = require('../repositories/article.repository');

class ArticlesService {
  articlesRepository = new ArticlesRepository();

  // article 생성하기
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
    const createArticleData = await this.articlesRepository.createArticle(
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

  // article 수정하기
  updateArticle = async (
    articleId,
    userId,
    title,
    coverimage,
    residence,
    area,
    budget,
    content,
    tags
  ) => {
    const updateArticleData = await this.articlesRepository.updateArticle(
      articleId,
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

  // article 삭제하기
  deleteArticle = async (articleId, userId) => {
    const deleteArticleData = await this.articlesRepository.deleteArticle(
      articleId,
      userId
    );
  };
}

module.exports = ArticlesService;
