'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Turmas', [
     {
       data_inicio: "2021-12-30",
       nivel_id: 1,
       docente_id: 6,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      data_inicio: "2021-12-30",
      nivel_id: 2,
      docente_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      data_inicio: "2021-12-30",
      nivel_id: 3,
      docente_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      data_inicio: "2021-12-30",
      nivel_id: 4,
      docente_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      data_inicio: "2021-12-30",
      nivel_id: 5,
      docente_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      data_inicio: "2021-12-30",
      nivel_id: 6,
      docente_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {})
  },  

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Turmas',
    )
  }
};
