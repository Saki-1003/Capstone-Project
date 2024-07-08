'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('order_items', {

      fields: ['OrderId'],
      type: 'foreign key',
      name: 'order_orderItem_association',
      references: {
        table: 'orders',
        field: 'OrderId'
      },
      onDelete: 'CASCADE'
    }),
    
    await queryInterface.addConstraint('order_items', {

      fields: ['ProductId'],
      type: 'foreign key',
      name: 'product_orderItem_association',
      references: {
        table: 'products',
        field: 'ProductId'
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('order_items', {
      fields: ['OrderId'],
      type: 'foreign key',
      name: 'order_orderItem_association',
      references: {
        table: 'orders',
        field: 'OrderId'
      },
    }),

    await queryInterface.removeConstraint('order_items', {
      fields: ['ProductId'],
      type: 'foreign key',
      name: 'product_orderItem_association',
      references: {
        table: 'products',
        field: 'ProductId'
      },
    })
  }
}