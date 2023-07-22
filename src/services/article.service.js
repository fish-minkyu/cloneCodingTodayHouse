const ArticlesRepository = require('../repositories/article.repository');

class ArticlesService {
  articlesRepository = new ArticlesRepository();
}

module.exports = ArticlesService;
