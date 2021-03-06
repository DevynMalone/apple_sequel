'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mac extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mac.init({
    type: DataTypes.STRING,
    storage: DataTypes.STRING,
    display: DataTypes.STRING,
    chip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mac',
  });
  return Mac;
};