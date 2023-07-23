const { Articles, Items, Users } = require('../models');
const { Op } = require('sequelize');

// 통합 검색 결과 가져오기
class SearchRepository {
  totalSearchData = async (query) => {
    // Articles 테이블에서 쿼리값과 유사하게 일치하는 title 들을 전부 반환
    const articles = await Articles.findAll({
      attributes: ['articleId', 'coverImage', 'title'],
      include: [
        {
          model: Users,
          attributes: ['nickname'],
        },
      ],
      where: {
        title: {
          [Op.like]: `%${query}%`,
        },
      },
      limit: 6,
      raw: true,
    });

    // Items 테이블에서 쿼리값과 유사하게 일치하는 itemname 들을 전부 반환
    const items = await Items.findAll({
      attributes: ['itemId', 'coverImage', 'itemname', 'price'],
      where: {
        itemname: {
          [Op.like]: `%${query}%`,
        },
      },
      limit: 6,
    });

    // API 명세서에 맞게 객체에 담아서 반환
    const totalSearchedData = {
      items,
      articles,
    };
    return totalSearchedData;
  };
}

module.exports = SearchRepository;
