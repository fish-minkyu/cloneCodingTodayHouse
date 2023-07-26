'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Items.init(
    {
      itemId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      itemName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      category: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      coverImage: {
        allowNull: false,
        type: DataTypes.STRING(3000),
      },
      brand: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING(3000),
      },
      coverMainImage: {
        allowNull: false,
        type: DataTypes.STRING(1000),
      },
    },
    {
      sequelize,
      modelName: 'Items',
      timestamps: false,
    }
  );
  return Items;
};
