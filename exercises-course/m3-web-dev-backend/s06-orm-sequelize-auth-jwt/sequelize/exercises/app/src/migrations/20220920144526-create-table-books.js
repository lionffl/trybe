'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Books', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      page_quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};
