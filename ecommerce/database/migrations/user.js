'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      UserId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true,
      },
      password: {
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      address_line1: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      address_line2: {
        type: Sequelize.STRING, 
      },
      city: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      postal_code: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      region: {
        type: Sequelize.STRING, 
      },
      country: {
        type: Sequelize.STRING, 
        allowNull: false,
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};