'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accessories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Accessories.init({
    product: DataTypes.STRING,
    price: DataTypes.STRING,
    size: DataTypes.STRING,
    colorOptions: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Accessories',
  });
  return Accessories;
};