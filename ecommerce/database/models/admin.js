'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    
    static associate(models) {
 
    }
  }
  Admin.init({
    AdminId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
    first_name: DataTypes.STRING, allowNull: false,
    last_name: DataTypes.STRING, allowNull: false,
    email: DataTypes.STRING, allowNull: false, unique: true,
    password: DataTypes.STRING, allowNull: false, unique: true,
  }, {
    sequelize,
    modelName: 'admins',
    underscored: true,
  });
  return Admin;
};