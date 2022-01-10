'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Wallets', [{
       name: 'Andrena Maria',
       cpf: '13246510407',
       birthdate: '2000/06/17',
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Wallets', null, {});
  }
};
