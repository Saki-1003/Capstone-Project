'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      ProductId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      sell_price: {
        type: Sequelize.FLOAT, 
        allowNull: false, 
      },
      attribute1_size: {
        type: Sequelize.STRING, 
        allowNull: true,
      },
      attribute2_color: {
        type: Sequelize.STRING, 
        allowNull: true,
      },
      attribute3: {
        type: Sequelize.STRING, 
        allowNull: true,
      },
      attribute4: {
        type: Sequelize.STRING, 
        allowNull: true,
      },
      category: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      summary: {
        type: Sequelize.TEXT('medium'), 
        allowNull: false,
      },
      specification: {
        type: Sequelize.TEXT('medium'), 
        allowNull: true,
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
      },
      SupplierId: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};