"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Items,{
        targetKey:"itemId",
        foreignKey:"itemId"
      })
    }
  }
  Items.init(
    {
      itemId: {
        allowNull: false, // NOT NULL
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      itemName : {
        allowNull: false,
        type: DataTypes.INTEGER,        
      },
      category: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      coverImage: {
        allowNull: false,
        type: DataTypes.STRING
      },
      brand:{
        allowNull:false,
        type: DataTypes.STRING
      },  
      price: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "Items",
    }
  );
  return Items;
};
