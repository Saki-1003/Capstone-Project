'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('wishlist_items', {

      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_wishlistItem_association',
      references: {
        table: 'users',
        field: 'UserId'
      },
      onDelete: 'CASCADE'
    }),
    
    await queryInterface.addConstraint('wishlist_items', {

      fields: ['ProductId'],
      type: 'foreign key',
      name: 'product_wishlistItem_association',
      references: {
        table: 'products',
        field: 'ProductId'
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('wishlist_items', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_wishlistItem_association',
      references: {
        table: 'users',
        field: 'UserId'
      },
    }),

    await queryInterface.removeConstraint('wishlist_items', {
      fields: ['ProductId'],
      type: 'foreign key',
      name: 'product_wishlistItem_association',
      references: {
        table: 'products',
        field: 'ProductId'
      },
    })
  }
}