const SearchService = require('../services/article.service');
class SearchController {
  searchService = new SearchService();

  // 통합 검색 결과 가져오기
  totalSearchData = async (req, res, next) => {
    try {
      const query = req.query;
      const totalSearchedData = await this.searchService.totalSearchData(query);
      // 객체에 담겨져서 전달되기 때문에 따로 객체로 감싸줄 필요 없음.
      res.status(201).json(totalSearchedData);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = SearchController;
