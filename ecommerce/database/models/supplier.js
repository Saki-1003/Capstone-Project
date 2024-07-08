'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Supplier.init({
    SupplierId: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true,
    supplier_name: DataTypes.STRING, allowNull: false,
    supplier_address1:  DataTypes.STRING, allowNull: false,
    supplier_address2:  DataTypes.STRING, allowNull: true,
    city:  DataTypes.STRING, allowNull: false,
    postal_code:  DataTypes.INTEGER, allowNull: false,
    region:  DataTypes.STRING, allowNull: true,
    country: DataTypes.STRING, allowNull: false,
    email: DataTypes.STRING, allowNull: true, unique: true,
    phone: DataTypes.STRING, allowNull: true, unique: true,
    supplier_category: DataTypes.STRING, allowNull: false,
  }, {
    sequelize,
    modelName: 'suppliers',
    underscored: true,
  });
  return Supplier;
};