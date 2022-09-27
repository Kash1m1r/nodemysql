'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('niveis', [{
        descr_nivel: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('niveis', null, {});
  }
};
