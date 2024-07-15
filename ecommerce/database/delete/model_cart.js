'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {

    static associate(models) {
      Cart.belongsTo(models.User)
      models.User.hasOne(Cart)
    }
  }
  Cart.init({
    CartId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
    total_amount: DataTypes.FLOAT, allowNull: true,
  }, {
    sequelize,
    modelName: 'carts',
    underscored: true,
  });
  return Cart;
};