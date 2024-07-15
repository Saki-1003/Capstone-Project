'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist_Item extends Model {

    static associate(models) {
     
      Wishlist_Item.belongsTo(models.User)
      models.User.hasMany(Wishlist_Item)

      Wishlist_Item.belongsTo(models.Product)
      models.Product.hasMany(Wishlist_Item)
    }
  }
  Wishlist_Item.init({
    Wishlist_ItemId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
  }, {
    sequelize,
    modelName: 'wishlist_items',
    underscored: true,
  });
  return Wishlist_Item;
};