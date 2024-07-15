'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('cart_items', {

      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_cartItem_association',
      references: {
        table: 'users',
        field: 'UserId'
      },
      onDelete: 'CASCADE'
    }),
    
    await queryInterface.addConstraint('cart_items', {

      fields: ['ProductId'],
      type: 'foreign key',
      name: 'product_cartItem_association',
      references: {
        table: 'products',
        field: 'ProductId'
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('cart_items', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_cartItem_association',
      references: {
        table: 'users',
        field: 'UserId'
      },
    }),

    await queryInterface.removeConstraint('cart_items', {
      fields: ['ProductId'],
      type: 'foreign key',
      name: 'product_cartItem_association',
      references: {
        table: 'products',
        field: 'ProductId'
      },
    })
  }
}