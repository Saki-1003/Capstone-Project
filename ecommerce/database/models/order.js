'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate(models) {
      Order.belongsTo(models.User, {foreignKey: 'UserId'})
      models.User.hasMany(Order, {foreignKey: "UserId"})
    }
  }
  Order.init({
    OrderId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
    total_amount: DataTypes.FLOAT, allowNull: true,
  }, {
    sequelize,
    modelName: 'orders',
    underscored: true,
  });
  return Order;
};