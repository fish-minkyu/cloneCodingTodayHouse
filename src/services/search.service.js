const SearchRepository = require('../repositories/search.repository');

class SearchService {
  searchRepository = new SearchRepository();

  // 통합 검색 결과 가져오기
  totalSearchData = async (query) => {
    const totalSearchedData = await this.searchRepository.totalSearchData(
      query
    );
    return totalSearchedData;
  };
}

module.exports = SearchService;
