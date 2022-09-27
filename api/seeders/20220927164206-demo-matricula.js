'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('matriculas', [{
        status: "Desistente",
        estudante_id: 1,
        turma_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "Matriculado",
        estudante_id: 2,
        turma_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "Matriculado",
        estudante_id: 3,
        turma_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "Análise",
        estudante_id: 4,
        turma_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('matriculas', null, {});
  }
};
