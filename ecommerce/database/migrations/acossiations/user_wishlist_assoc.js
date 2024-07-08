'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('wishlists', {

      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_wishlists_association',
      references: {
        table: 'users',
        field: 'UserId'
      },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('wishlists', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_wishlists_association',
      references: {
        table: 'users',
        field: 'UserId'
      }
    });
  }
}