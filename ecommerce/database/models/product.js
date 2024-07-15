'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
 
    static associate(models) {
 
      Product.belongsTo(models.Supplier)
      models.Supplier.hasMany(Product)
    }
  }
  Product.init({
    ProductId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
    product_title: DataTypes.STRING, allowNull: false,
    cost: DataTypes.FLOAT, allowNull: false,
    sell_price: DataTypes.FLOAT, allowNull: false,
    attribute1_size: DataTypes.STRING, allowNull: true,
    attribute2_color: DataTypes.STRING, allowNull: true,
    attribute3: DataTypes.STRING, allowNull: true,
    attribute4: DataTypes.STRING, allowNull: true,
    category: DataTypes.STRING, allowNull: false,
    summary: DataTypes.TEXT('medium'), allowNull: false,
    specification: DataTypes.TEXT('medium'), allowNull: true,
  }, {
    sequelize,
    modelName: 'products',
    underscored: true,
  });
  return Product;
};