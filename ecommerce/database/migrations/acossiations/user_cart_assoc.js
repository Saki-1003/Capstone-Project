'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('carts', {

      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_cart_association',
      references: {
        table: 'users',
        field: 'UserId'
      },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('carts', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_cart_association',
      references: {
        table: 'users',
        field: 'UserId'
      }
    });
  }
}