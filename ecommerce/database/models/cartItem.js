'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Item extends Model {

    static associate(models) {
      Cart_Item.belongsTo(models.User)
      models.User.hasMany(Cart_Item)
      
      Cart_Item.belongsTo(models.Product)
      models.Product.hasMany(Cart_Item)
    }
  }
  Cart_Item.init({
    Cart_ItemId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
  }, {
    sequelize,
    modelName: 'cart_items',
    underscored: true,
  });
  return Cart_Item;
};