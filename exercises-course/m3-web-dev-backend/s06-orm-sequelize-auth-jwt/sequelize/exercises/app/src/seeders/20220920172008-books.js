'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books',
      [
        {
          title: 'Digital Fortress',
          author: 'Dan Brown',
          publisher: 'Transworld',
          page_quantity: 350,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Deception Point',
          author: 'Dan Brown',
          publisher: 'Transworld',
          page_quantity: 400,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Angels and Demons',
          author: 'Dan Brown',
          publisher: 'Transworld',
          page_quantity: 394,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Books', null, {});
  }
};
