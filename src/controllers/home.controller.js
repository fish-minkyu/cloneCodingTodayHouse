const HomeService = require('../services/home.service');

class HomeController {
  homeService = new HomeService();

  getHome = async (req, res, next) => {
    try {
      const userId = res.locals.userId;
      const homepage = await this.homeService.getHome(userId);

      res.status(200).json({
        articleList: homepage.articleList,
        itemList: homepage.itemList,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

module.exports = HomeController;
