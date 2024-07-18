'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('orders', {

      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_order_association',
      references: {
        table: 'users',
        field: 'UserId'
      },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('orders', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_order_association',
      references: {
        table: 'users',
        field: 'UserId'
      }
    });
  }
}