'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('wishlist_items', {

      fields: ['WishlistId'],
      type: 'foreign key',
      name: 'wishlist_wishlistItem_association',
      references: {
        table: 'wishlists',
        field: 'WishlistId'
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
      fields: ['WishlistId'],
      type: 'foreign key',
      name: 'wishlist_wishlistItem_association',
      references: {
        table: 'wishlists',
        field: 'WishlistId'
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