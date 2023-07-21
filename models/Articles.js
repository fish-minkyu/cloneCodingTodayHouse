"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here     
      this.belongsTo(models.Users,{
        targetKey:"userId",
        foreignKey:"UserId"
      }),
      this.hasMany(models.ContentImages,{
        sourceKey:"articleId",
        foreignKey:"articleId"
      })      
    }
  }
  Articles.init(
    {
      articleId: {
        allowNull: false, // NOT NULL
        autoIncrement: true, // AUTO_INCREMENT
        primaryKey: true, // Primary Key (기본키)
        type: DataTypes.INTEGER,
      },
      UserId: {
        allowNull: false, // NOT NULL
        type: DataTypes.INTEGER,        
      },
      title: {
        allowNull: false, // NOT NULL
        type: DataTypes.STRING,
      },
      coverImage: {
        allowNull: false, // NOT NULL
        type: DataTypes.STRING,
      },
      residence: {
        allowNull: false, // NOT NULL
        type: DataTypes.STRING,
      },
      area: {
        allowNull: false, // NOT NULL
        type: DataTypes.INTEGER,
      },
      budget: {
        allowNull: false, // NOT NULL
        type: DataTypes.INTEGER,
      },
      content: {
        allowNull: false, // NOT NULL
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Articles",
    }
  );
  return Articles;
};