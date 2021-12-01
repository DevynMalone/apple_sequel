'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Handheld extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Handheld.init({
    type: DataTypes.STRING,
    storage: DataTypes.STRING,
    display: DataTypes.STRING,
    size: DataTypes.STRING,
    cellular: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Handheld',
  });
  return Handheld;
};