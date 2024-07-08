'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {

    static associate(models) {
      Wishlist.belongsTo(models.User)
      models.User.hasOne(Wishlist)
    }
  }
  Wishlist.init({
    WishlistId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
    total_amount: DataTypes.FLOAT, allowNull: true,
  }, {
    sequelize,
    modelName: 'wishlists',
    underscored: true,
  });
  return Wishlist;
};