'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pessoas', [
      {
       nome: 'Tassio Silva',
       ativo: true,
       email: "tassio@email.com",
       role: 'caixa',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nome: 'Andrena Maria',
       ativo: true,
       email: "andrena@email.com",
       role: 'estudante',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nome: 'Reginaldo Nascimento',
       ativo: true,
       email: "reginaldo@email.com",
       role: 'gerente',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nome: 'Tiago Silva',
       ativo: false,
       email: "tiago@email.com",
       role: 'eletrica',
       createdAt: new Date(),
       updatedAt: new Date()
      }
  ], {})
  },    
  down:  (queryInterface, Sequelize) => {
    return queryqueryInterface.bulkDelete('pessoas', null, {});
  }
};
