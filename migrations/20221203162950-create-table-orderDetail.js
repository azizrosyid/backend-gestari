'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderDetail', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_transaction: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'transaction',
          key: 'id'
        }
      },
      id_katalog: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'katalog',
          key:'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
  });
},
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orderDetail');
}};
