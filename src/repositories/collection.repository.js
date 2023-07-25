const { Articles, Users, Collections } = require('../models');
const { Op } = require('sequelize');

// 책갈피 저장하기 불러오기 삭제하기
class CollectionsRepository {
  // 저장하기
  createCollection = async () => {
    const createCollectionData = await Collections.create({
      articleId: Articles.articleId,
      UserId: Users.userId,
    });
    return createCollectionData;
  };

  // 불러오기(여기서 두개를 부르고 맞는 데이터를 service에서 처리)
  findAllCollection = async () => {
    const findAllCollectionData = await Collections.findAll();

    return findAllCollectionData;
  };

  // 삭제하기
  deleteCollection = async (articleId, userId) => {
    const deleteCollectionData = await Collections.destroy({
      where: { [Op.and]: [{ articleId, UserId: { userId } }] },
    });

    return deleteCollectionData;
  };

  // 상세조회에서 Collection이 추가 되어있는지 확인하기
  findOneCollection = async (articleId, userId) => {
    const collection = await Collections.findOne({
      where: {
        [Op.and]: [{ articleId, userId }],
      },
    });

    return collection;
  };
}

module.exports = CollectionsRepository;
