const { Articles } = require('../models');
const { Op } = require('sequelize');

// createArticle findArticle updateArticle deleteArticle
class ArticlesRepository {
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
    const createArticleData = await Articles.create({
      userId,
      title,
      coverimage,
      residence,
      area,
      budget,
      content,
      tags,
    });
    return createArticleData;
  };

  findArticle = async (articleId) => {
    const article = await Articles.findOne({ where: { articleId } });

    return article;
  };

  updateArticle = async (
    userId,
    title,
    coverimage,
    residence,
    area,
    budget,
    content,
    tags
  ) => {
    const updateArticleData = await Articles.update(
      {
        userId,
        title,
        coverimage,
        residence,
        area,
        budget,
        content,
        tags,
      },
      {
        where: { [Op.and]: [{ articleId, userId }] },
      }
    );

    return updateArticleData;
  };

  deleteArticle = async (articleId, userId) => {
    const deleteArticleData = await Articles.destroy({
      where: { [Op.and]: [{ articleId, userId }] },
    });

    return deleteArticleData;
  };
}

module.exports = ArticlesRepository;
