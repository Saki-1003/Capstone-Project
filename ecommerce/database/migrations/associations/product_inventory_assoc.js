'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('inventories', {

      fields: ['ProductId'],
      type: 'foreign key',
      name: 'product_inventory_association',
      references: {
        table: 'products',
        field: 'ProductId'
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('inventories', {
      fields: ['ProductId'],
      type: 'foreign key',
      name: 'product_inventory_association',
      references: {
        table: 'products',
        field: 'ProductId'
      },
    })
  }
}