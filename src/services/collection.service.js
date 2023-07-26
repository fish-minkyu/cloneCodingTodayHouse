const CollectionsRepository = require("../repositories/collection.repository");
const CustomError = require("../middlewares/errorMiddleware");
const { Op } = require("sequelize");
const { Articles, Users } = require("../models");

// 에러 핸들링 보고 쓰기

class CollectionsService {
  collectionsRepository = new CollectionsRepository();

  // 책갈피 저장하기
  createCollection = async (userId, articleId) => {
    const createCollectionData =
      await this.collectionsRepository.createCollection(userId, articleId);

    return createCollectionData;
  };

  // 책갈피 불러오기-Articles/Users
  findAllCollection = async (userId) => {
    const collections = await this.collectionsRepository.findAllCollection(
      userId
    );

    return collections;
  };

  // 책갈피 삭제하기
  deleteCollection = async (articleId, userId) => {
    const deleteCollectionData =
      await this.collectionsRepository.deleteCollection(articleId, userId);

    return deleteCollectionData;
  };
}

module.exports = CollectionsService;
