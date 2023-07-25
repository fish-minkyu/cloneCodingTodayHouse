const { Articles, Users, Collections } = require("../models");
const { OP } = require("sequelize");

// 책갈피 저장하기 불러오기 삭제하기
class CollectionsRepository {
  // 저장하기
  createCollection = async (userId,articleId) => {
    const createCollectionData = await Collections.create({
      articleId: articleId,
      userId: userId,
    });
    return createCollectionData;
  };

  // 불러오기(여기서 두개를 부르고 맞는 데이터를 service에서 처리)
  findAllCollection = async (userId) => {
    const findAllCollectionData = await Collections.findAll({
        where:{userId},
        include :[
            {
                model:Articles,                
                attributes:['articleId','title','coverImage']
            },
            {
                model:Users,                
                attributes:['nickname']
            }
        ]      
    });

    return findAllCollectionData;
  };

  // 삭제하기
  deleteCollection = async (articleId, userId) => {
    const deleteCollectionData = await Collections.destroy({
      where: { [Op.and]: [{ articleId, UserId: { userId } }] },
    });

    return deleteCollectionData;
  };
}

module.exports = CollectionsRepository;
