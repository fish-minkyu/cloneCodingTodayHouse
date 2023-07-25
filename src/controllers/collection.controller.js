const CollectionsService = require("../services/collection.service");
const CustomError = require("../middlewares/errorMiddleware");

class CollectionController {
  collectionsService = new CollectionsService();

  // 책갈피 저장
  createCollection = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { articleId } = req.body;

      const createCollection = await this.collectionsService.createCollection(
        userId,
        articleId
      );
      res
        .status(201)
        .json({ success: true, message: "책갈피 저장에 성공하였습니다." });
    } catch (error) {
      next(error);
    }
  };

  // 책갈피 불러오기
  findAllCollection = async (req, res, next) => {
    try {
      const collections = await this.collectionsService.findAllCollection();

      res.status(200).json({ collecionList: collections });
    } catch (error) {
      next(error);
    }
  };

  // 책갈피 삭제하기
  deleteCollection = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { articleId } = req.body;

      const deleteCollection = await this.collectionsService.deleteCollection(
        articleId,
        userId
      );
      res
        .status(201)
        .json({ success: true, message: "책갈피 삭제에 성공하였습니다." });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = CollectionController;
