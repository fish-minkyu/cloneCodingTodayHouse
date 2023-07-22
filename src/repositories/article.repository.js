const { Articles } = require("../models");
const { Op } = require("sequelize");

class ArticlesRepository {
  createArticle = async(
    userId,
    title,
    coverimage,
    residence,
    area,
    budget,
    content,
    tags
  ) => {
    const createArticleData = await Articles.create({
        userId,
        title,
        coverimage,
        residence,
        area,
        budget,
        content,
        tags 
    })
    return {success : true}    
  }
}

// findArticle updateArticle deleteArticle
// class findArticleRepository {
// 
// }

module.exports = ArticlesRepository;
