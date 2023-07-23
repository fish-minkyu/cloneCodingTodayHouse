const { Articles, Users, Items } = require('../models');
const { Op } = require('sequelize');

// createArticle findArticle updateArticle deleteArticle
class ArticlesRepository {
  createArticle = async (
    userId,
    title,
    coverImage,
    residence,
    area,
    budget,
    content,
    tags
  ) => {
    const createArticleData = await Articles.create({
      userId,
      title,
      coverImage,
      residence,
      area,
      budget,
      content,
      tags,
    });
    return createArticleData;
  };

  findArticle = async (articleId, userId) => {
    const whereClause = userId ? { articleId, userId } : { articleId };
    const article = await Articles.findOne({ where: whereClause });
    return article;
  };
  

  findAllArticle = async (whereConditions, orderCondition) => {
    const allArticle = await Articles.findAll({
      attributes: ['articleId', 'title', 'coverImage'],
      include: [
        {
          model: Users,
          attributes: ['nickname'],
        },
      ],
      where: whereConditions,
      order: orderCondition,
      raw: true,
    });

    return allArticle;
  };

  // item 검색(무한 스크롤 적용)
  findArticleItem = async (itemName, page) => {
    const limit = 12;
    const offset = (page - 1) * limit;
    const allArticleItem = await Items.findAll({
      attributes: ['itemName', 'brand', 'coverImage'],
      where: {
        itemName: {
          [Op.like]: `%${itemName}%`,
        },
      },
      limit: limit,
      offset: offset,
    });

    return allArticleItem;
  };

  updateArticle = async (
    articleId,
    userId,
    title,
    coverImage,
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
        coverImage,
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

  getHomeArticle = async () => {
    const articleList = await Articles.findAll({
      attributes: ['articleId', 'title', 'coverImage'],
      include: [
        {
          model: Users,
          attributes: ['nickname'],
        },
      ],
      limit: 12,
      order: [['createdAt', 'DESC']],
      raw: true,
    });

    return articleList;
  };

  findMyArticle = async (userId) => {
    const myArticles = await Articles.findAll({
      attributes: ['articleId', 'title', 'coverImage'],
      where: [{ userId }],
      order: [['createdAt', 'DESC']],
      raw: true,
    });

    return myArticles;
  };
}

module.exports = ArticlesRepository;
