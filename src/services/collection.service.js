const CollectionsRepository = require("../repositories/collection.repository");
const CustomError = require("../middlewares/errorMiddleware");
const { Op } = require("sequelize");
const { Articles, Users } = require("../models");

// 에러 핸들링 보고 쓰기

class CollectionsService {
  collectionsRepository = new CollectionsRepository();

  // 책갈피 저장하기
  createCollection = async () => {
    const createCollectionData =
      await this.collectionsRepository.createCollection();

    return createCollectionData;
  };

  // 책갈피 불러오기-Articles/Users
  findAllCollection = async () => {
    const findAllCollectionData =
      await this.collectionsRepository.findAllCollection();

    try {
      const collections = [];
      for (const collection of findAllCollectionData) {
        const { articleId, UserId } = collection;
        const article = await Articles.findOne({ where: { articleId } });
        const user = await Users.findOne({ where: { UserId } });

        const NewCollections = {
          articleId: article.articleId,
          title: article.title,
          coverImage: article.coverImage,
          nickname: user.nickname,
        };

        collections.push(NewCollections);
      }

      return collections;
    } catch (error) {
      throw new CustomError(`${error}`, 404);
    }
  };

  // 책갈피 삭제하기
  deleteCollection = async (articleId, userId) => {
    const deleteCollectionData =
      await this.collectionsRepository.deleteCollection(articleId, userId);

    return deleteCollectionData;
  };
}

module.exports = CollectionsService;
