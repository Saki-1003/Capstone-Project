'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
 
    }
  }
  User.init({
    UserId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
    first_name: DataTypes.STRING, allowNull: false,
    last_name: DataTypes.STRING, allowNull: false,
    email: DataTypes.STRING, allowNull: false, unique: true,
    phone: DataTypes.STRING, allowNull: false, unique: true,
    password: DataTypes.STRING, allowNull: false, unique: true,
    birthday: DataTypes.DATE, allowNull: true,
    address_line1:  DataTypes.STRING, allowNull: false,
    address_line2:  DataTypes.STRING, allowNull: true,
    city:  DataTypes.STRING, allowNull: false,
    postal_code:  DataTypes.STRING, allowNull: false,
    region:  DataTypes.STRING, allowNull: true,
    country: DataTypes.STRING, allowNull: false,
  }, {
    sequelize,
    modelName: 'users',
    underscored: true,
  });
  return User;
};