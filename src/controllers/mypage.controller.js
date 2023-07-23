const MypageService = require('../services/mypage.service');

class MypageController {
  mypageService = new MypageService();
  getMyArticles = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const myArticles = await this.mypageService.getMyArticles(userId);

      res.status(200).json({ list: myArticles });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MypageController;
