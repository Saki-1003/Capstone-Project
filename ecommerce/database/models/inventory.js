'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
 
    static associate(models) {
 
      Inventory.belongsTo(models.Product)
      models.Product.hasMany(Inventory)
    }
  }
  Inventory.init({
    InventoryId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
    GR_date: DataTypes.DATE, allowNull: false,
    quantity: DataTypes.INTEGER, allowNull: false,
    location: DataTypes.STRING, allowNull: true,
  }, {
    sequelize,
    modelName: 'inventories',
    underscored: true,
  });
  return Inventory;
};