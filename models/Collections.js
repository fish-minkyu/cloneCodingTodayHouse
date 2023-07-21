"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Collections.init(
    {
      UserId: {
        allowNull: false, // NOT NULL
        type: DataTypes.INTEGER,
      },
      articleId: {
        allowNull: false, // NOT NULL
        type: DataTypes.INTEGER,   
      },
    },

    {
      sequelize,
      modelName: "Collections",
    }
  );
  return Collections;
};
