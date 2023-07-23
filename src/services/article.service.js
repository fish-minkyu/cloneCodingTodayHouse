const ArticlesRepository = require('../repositories/article.repository');
const CustomError = require('../middlewares/errorMiddleware');
const { Op } = require('sequelize');

class ArticlesService {
  articlesRepository = new ArticlesRepository();

  // article 생성하기
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
    // tags String화
    const stringTags = JSON.stringify(tags);
    const createArticleData = await this.articlesRepository.createArticle(
      userId,
      title,
      coverImage,
      residence,
      area,
      budget,
      content,
      stringTags
    );

    return { success: true };
  };

  // article 하나 조회
  findArticle = async (articleId) => {
    const findArticle = await this.articlesRepository.findArticle(articleId);
    if (!findArticle) throw new CustomError('집들이를 찾을 수 없습니다.', 404);

    //string 되어있는 tags 객체화
    const objectTags = JSON.parse(findArticle.tags);

    return {
      articleId: findArticle.articleId,
      userId: findArticle.userId,
      title: findArticle.title,
      coverImage: findArticle.coverImage,
      residence: findArticle.residence,
      area: findArticle.area,
      budget: findArticle.budget,
      content: findArticle.content,
      tags: objectTags,
    };
  };

  // article 전체 조회(조건 추가)
  findAllArticle = async (queryObject) => {
    // 조건 설정 객체
    let whereConditions = {};

    // query filter
    if (queryObject.query) {
      whereConditions.title = {
        [Op.like]: '%' + queryObject.query + '%',
      };
    }

    // residence filter
    if (queryObject.residence) {
      whereConditions.residence = queryObject.residence;
    }

    // areaMin and areaMax filter
    if (queryObject.areaMin || queryObject.areaMax) {
      whereConditions.area = {};

      if (queryObject.areaMin) {
        whereConditions.area[Op.gte] = Number(queryObject.areaMin);
      }
      if (queryObject.areaMax) {
        whereConditions.area[Op.lte] = Number(queryObject.areaMax);
      }
    }

    // budgetMin and budgetMax filter
    if (queryObject.budgetMin || queryObject.budgetMax) {
      whereConditions.budget = {};

      if (queryObject.budgetMin) {
        whereConditions.budget[Op.gte] = Number(queryObject.budgetMin);
      }
      if (queryObject.budgetMax) {
        whereConditions.budget[Op.lte] = Number(queryObject.budgetMax);
      }
    }

    // order filter
    let order = queryObject.order || 'newest';
    let orderCondition =
      order === 'oldest' ? [['createdAt', 'ASC']] : [['createdAt', 'DESC']];

    const allArticle = await this.articlesRepository.findAllArticle(
      whereConditions,
      orderCondition
    );

    return allArticle.map((article) => {
      return {
        articleId: article.articleId,
        title: article.title,
        coverImage: article.coverImage,
        nickname: article['User.nickname'],
      };
    });
  };

  // item 검색
  findArticleItem = async (itemName) => {
    const allArticleItem = await this.articlesRepository.findArticleItem(
      itemName
    );
    return allArticleItem;
  };

  // article 수정하기
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
    // tags String화
    const stringTags = JSON.stringify(tags);
    const updateArticleData = await this.articlesRepository.updateArticle(
      articleId,
      userId,
      title,
      coverImage,
      residence,
      area,
      budget,
      content,
      stringTags
    );
    return { success: true };
  };

  // article 삭제하기
  deleteArticle = async (articleId, userId) => {
    const deleteArticleData = await this.articlesRepository.deleteArticle(
      articleId,
      userId
    );

    return { success: true };
  };
}

module.exports = ArticlesService;
