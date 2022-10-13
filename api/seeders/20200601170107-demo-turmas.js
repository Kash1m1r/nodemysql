module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Turmas', [
      {
        docente_id: 6,
        data_inicio: '2020-02-01',
        nivel_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()				 
      },
      {
        docente_id: 6,
        data_inicio: '2020-02-01',
        nivel_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()			
      },
      {
        docente_id: 6,
        data_inicio: '2020-02-01',
        nivel_id: 3,       
        createdAt: new Date(),
        updatedAt: new Date()			
      },
      {
        docente_id: 6,
        data_inicio: '2020-07-01',
        nivel_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()			
      }
    ], {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Turmas', null, {})
  }
}
