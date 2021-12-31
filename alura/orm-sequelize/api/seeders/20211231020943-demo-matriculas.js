'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Matriculas',[
      {
        status: "confirmado",
        estudante_id: 1,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "confirmado",
        estudante_id: 2,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "confirmado",
        estudante_id: 3,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "confirmado",
        estudante_id: 4,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "confirmado",
        estudante_id: 5,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "confirmado",
        estudante_id: 6,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Matriculas',
    )
  }
};
