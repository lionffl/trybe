'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'phoneNum', { 
      type: Sequelize.STRING,
      after: 'email', 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'phoneNum');
  }
};
