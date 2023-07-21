"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ContentImages,{
        targetKey:"ContentImageId",
        foreignKey:"ContentImageId"
      }),
      this.belongsTo(models.Items,{
        targetKey:"itemId",
        foreignKey:"itemId"
      })
    }
  }
  Tags.init(
    {
      tagId: {
        allowNull: false, // NOT NULL
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ContentImageId:{
        allowNull: false,
        type: DataTypes.INTEGER
      },
      itemId:{
        allowNull: false,
        type: DataTypes.INTEGER
      },
      axisX:{
        allowNull: false,
        type: DataTypes.INTEGER
      },
      axisY: {
        allowNull: false,
        type: DataTypes.INTEGER
      }      
    },
    {
      sequelize,
      modelName: "Tags",
    }
  );
  return Tags;
};
