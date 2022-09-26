'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pessoas', [{
        nome: 'John Doe',
        ativo: true,
        email: 'john@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Gabriel Pereira',
        ativo: true,
        email: 'gabriel@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Lídia',
        ativo: true,
        email: 'analidia@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Joaquim',
        ativo: true,
        email: 'joaquim@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('pessoas', null, {});
  }
};
