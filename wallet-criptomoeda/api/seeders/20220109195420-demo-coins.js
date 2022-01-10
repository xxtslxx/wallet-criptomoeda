module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Coins', [
      {
        coin: "BTC",
        fullname: "Bitcoin",
        amont: 0.15780,
        transactions: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coin: "ETH",
        fullname: "Etherium",
        amont: 5.19000,
        transactions: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coin: "BTC",
        fullname: "Bitcoin",
        amont: 2.20000,
        transactions: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coin: "ETH",
        fullname: "Etherium",
        amont: 1.80000,
        transactions: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Coins', null, {})
  }
}