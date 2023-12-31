const ArticlesRepository = require('../repositories/article.repository');
const CollectionRepository = require('../repositories/collection.repository');
const CustomError = require('../middlewares/errorMiddleware');
const { Op } = require('sequelize');
const { articleSchema } = require('../middlewares/validationMiddleware');

class ArticlesService {
  articlesRepository = new ArticlesRepository();
  collectionRepository = new CollectionRepository();

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
    const { error } = articleSchema.validate({ title, coverImage, content });
    if (error) throw new CustomError(error.details[0].message, 412);

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
  findArticle = async (articleId, userId) => {
    const findArticle = await this.articlesRepository.findArticle(articleId);
    if (!findArticle) throw new CustomError('집들이를 찾을 수 없습니다.', 404);

    let findOneCollection = false;

    //collection 찾기
    if (!userId) {
      findOneCollection = false;
    } else {
      findOneCollection = await this.collectionRepository.findOneCollection(
        articleId,
        userId
      );
    }

    //string 되어있는 tags 객체화
    const objectTags = JSON.parse(findArticle.tags);

    return {
      articleId: findArticle.articleId,
      nickname: findArticle['User.nickname'],
      title: findArticle.title,
      coverImage: findArticle.coverImage,
      residence: findArticle.residence,
      area: findArticle.area,
      budget: findArticle.budget,
      content: findArticle.content,
      collection: findOneCollection,
      tags: objectTags,
    };
  };

  // article 전체 조회(조건 추가)
  findAllArticle = async (queryObject, userId) => {
    // 조건 설정 객체
    let whereConditions = {};

    // page 값이 1 미만인 경우
    if (queryObject.page < 1) throw new Error(`page는 1 이상 입력해주세요.`);

    // 무한 스크롤용 page 받기
    const page = parseInt(queryObject.page) || 1;

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
      orderCondition,
      userId,
      page
    );

    return allArticle.map((article) => {
      return {
        articleId: article.articleId,
        title: article.title,
        coverImage: article.coverImage,
        nickname: article['User.nickname'],
        collection: article.collection,
      };
    });
  };

  // item 검색
  findArticleItem = async (itemName, page) => {
    if (!itemName) {
      throw new CustomError('상품 이름을 입력 하세요', 400);
    }
    if (!page) {
      throw new CustomError('페이지를 입력 하세요', 400);
    }

    if (page < 1) {
      throw new CustomError('page는 1 이상 입력해주세요', 404);
    }

    // 게시글 작성할 때 상품 검색(무한 스크롤 적용)
    const allArticleItem = await this.articlesRepository.findArticleItem(
      itemName,
      page
    );
    if (allArticleItem.length === 0) {
      throw new CustomError('맞는 상품을 찾지 못했어요', 404);
    }
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

    const existArticle = await this.articlesRepository.findArticle(articleId);
    if (!existArticle) {
      throw new Error('Article이 존재하지 않습니다.', 404);
    }

    const validateArticle = await this.articlesRepository.findArticle(
      articleId,
      userId
    );
    if (!validateArticle) {
      throw new Error('Article 수정 권한이 없습니다.', 403);
    }

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
    const existArticle = await this.articlesRepository.findArticle(articleId);
    if (!existArticle) {
      throw new Error('Article이 존재하지 않습니다.', 404);
    }

    const validateArticle = await this.articlesRepository.findArticle(
      articleId,
      userId
    );
    if (!validateArticle) {
      throw new Error('Article 삭제 권한이 없습니다.', 403);
    }
    const deleteArticleData = await this.articlesRepository.deleteArticle(
      articleId,
      userId
    );

    return { success: true };
  };
}

module.exports = ArticlesService;
