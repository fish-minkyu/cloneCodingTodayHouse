const ArticlesService = require('../services/article.service');

class ArticlesController {
  articlesService = new ArticlesService();
}

module.exports = ArticlesController;
