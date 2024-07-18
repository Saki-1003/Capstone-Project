'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('products', {

      fields: ['SupplierId'],
      type: 'foreign key',
      name: 'supplier_product_association',
      references: {
        table: 'suppliers',
        field: 'SupplierId'
      },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('products', {
      fields: ['SupplierId'],
      type: 'foreign key',
      name: 'supplier_product_association',
      references: {
        table: 'suppliers',
        field: 'SupplierId'
      },
    });
  }
}