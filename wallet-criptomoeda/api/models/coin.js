'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coin.belongsTo(models.Wallet, {
        foreignKey: 'adress'
      })
      Coin.hasMany(models.Transaction, {
        foreignKey: 'coin_adress'
      })
    }
  };
  Coin.init({
    coin: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    amont: DataTypes.FLOAT,
    transactions: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coin',
  });
  return Coin;
};