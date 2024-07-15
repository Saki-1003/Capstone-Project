'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('suppliers', {
      SupplierId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      supplier_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      supplier_address1: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      supplier_address2: {
        type: Sequelize.STRING, 
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      postal_code: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      region: {
        type: Sequelize.STRING, 
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING, 
        allowNull: true, 
        unique: true,
      },
      supplier_category: {
        type: Sequelize.STRING, 
        allowNull: false, 
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('suppliers');
  }
};