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

  findArticle = async (articleId) => {
    const article = await Articles.findOne({ where: { articleId } });

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
    console.log(allArticle);

    return allArticle;
  };

  // item 검색
  findArticleItem = async (itemName) => {
    const allArticleItem = await Items.findAll({
      attributes: ['itemName', 'brand', 'coverImage'],
      where: {
        itemName: {
          [Op.like]: `%${itemName}%`,
        },
      },
      limit: 6,
    });

    return allArticleItem;
  };

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

  getHomeArticle = async () => {
    const articleList = await Articles.findAll({
      attributes: ['articleId', 'title', 'coverimage'],
      includes: [
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
}

module.exports = ArticlesRepository;
