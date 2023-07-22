const ArticlesService = require('../services/article.service');

class ArticlesController {
  articlesService = new ArticlesService();

  createArticle = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { title, coverimage, residence, area, budget, content, tags } =
        req.body;

      const createArticle = await this.articlesService.createArticle(
        userId,
        title,
        coverimage,
        residence,
        area,
        budget,
        content,
        tags
      );

      res
        .status(201)
        .json({ success: true, message: 'Article 작성에 성공하였습니다.' });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ArticlesController;
