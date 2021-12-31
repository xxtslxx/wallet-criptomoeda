'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Niveis', [
     {
       descr_nivel: 'basico',
       createdAt:new Date(),
       updatedAt:new Date()
     },
     {
      descr_nivel: 'intermediario',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      descr_nivel: 'avancado',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      descr_nivel: 'basico',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      descr_nivel: 'intermediario',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      descr_nivel: 'avancado',
      createdAt:new Date(),
      updatedAt:new Date()
    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Niveis',
    )
  }
};
