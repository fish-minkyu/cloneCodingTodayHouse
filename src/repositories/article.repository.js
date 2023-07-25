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

  // 게시글 상세 조회 : articleId 만 있을 경우
  // 게시글 삭제, 수정 권환용 : articleId, userId
  findArticle = async (articleId, userId) => {
    const whereClause = userId ? { articleId, userId } : { articleId };
    const article = await Articles.findOne({
      where: whereClause,
      attributes: [
        'articleId',
        'title',
        'coverImage',
        'residence',
        'area',
        'budget',
        'content',
        'tags',
      ],
      include: [
        {
          model: Users,
          attributes: ['nickname'],
        },
      ],
      raw: true,
    });
    return article;
  };

  findAllArticle = async (whereConditions, orderCondition, userId) => {
    const allArticle = await Articles.findAll({
      attributes: [
        'articleId',
        'title',
        'coverImage', // Sequelize CASE 문을 사용하여 collection 여부 체크
        [
          Sequelize.literal(
            `CASE WHEN Collections.articleId IS NOT NULL THEN TRUE ELSE FALSE END`
          ),
          'collection',
        ],
      ],
      include: [
        {
          model: Users,
          attributes: ['nickname'],
        },
        {
          model: Collections,
          attributes: [], // SELECT 절에 추가하고 싶지 않기 때문에 빈 배열
          required: false, // LEFT JOIN
          where: userId ? { userId } : null, // userId가 있으면 해당 사용자의 collection만, 없으면 모두
        },
      ],
      where: whereConditions,
      order: orderCondition,
      raw: true,
    });
    if (!userId) {
      allArticle.forEach((article) => {
        article.collection = false;
      });
    }

    return allArticle;
  };

  // item 검색(무한 스크롤 적용)
  findArticleItem = async (itemName, page) => {
    const limit = 12;
    const offset = (page - 1) * limit;
    const allArticleItem = await Items.findAll({
      attributes: ['itemId', 'itemName', 'brand', 'coverImage'],
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

  getHomeArticle = async (userId) => {
    const articleList = await Articles.findAll({
      attributes: [
        'articleId',
        'title',
        'coverImage',
        [
          Sequelize.literal(
            `CASE WHEN Collections.articleId IS NOT NULL THEN TRUE ELSE FALSE END`
          ),
          'collection',
        ],
      ],
      include: [
        {
          model: Users,
          attributes: ['nickname'],
        },
        {
          model: Collections,
          attributes: [], // SELECT 절에 추가하고 싶지 않기 때문에 빈 배열
          required: false, // LEFT JOIN
          where: userId ? { userId } : null, // userId가 있으면 해당 사용자의 collection만, 없으면 모두
        },
      ],
      limit: 12,
      order: [['createdAt', 'DESC']],
      raw: true,
    });

    if (!userId) {
      articleList.forEach((article) => {
        article.collection = false;
      });
    }

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
