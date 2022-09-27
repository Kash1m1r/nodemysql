'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('turmas', [{
        data_inicio: "2022-09-27",
        nivel_id: 3,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2022-10-07",
        nivel_id: 2,
        docente_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2022-11-16",
        nivel_id: 5,
        docente_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2022-02-15",
        nivel_id: 9,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('turmas', null, {});
  }
};
