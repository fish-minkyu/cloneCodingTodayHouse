const CustomError = require('../middlewares/errorMiddleware');
const SearchRepository = require('../repositories/search.repository');

class SearchService {
  searchRepository = new SearchRepository();

  // 통합 검색 결과 가져오기
  totalSearchData = async (query) => {
    if (!query) {
      throw new CustomError('검색어를 입력해야 합니다', 400);
    }
    const totalSearchedData = await this.searchRepository.totalSearchData(
      query
    );
    if (
      totalSearchedData.articles.length === 0 &&
      totalSearchedData.items.length === 0
    ) {
      throw new CustomError('해당 값이 존재하지 않습니다', 404);
    }
    return totalSearchedData;
  };
}

module.exports = SearchService;
