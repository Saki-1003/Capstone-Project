'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Item extends Model {
 
    static associate(models) {
     
      Order_Item.belongsTo(models.Order)
      models.Order.hasMany(Order_Item)

      Order_Item.belongsTo(models.Product)
      models.Product.hasMany(Order_Item)
    }
  }
  Order_Item.init({
    Order_ItemId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
  }, {
    sequelize,
    modelName: 'order_items',
    underscored: true,
  });
  return Order_Item;
};