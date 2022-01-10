'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Coin, {
        foreignKey: 'id'
      })
      Transaction.belongsTo(models.Wallet, {
        foreignKey: 'adress'
      })
    }
  };
  Transaction.init({
    value: DataTypes.FLOAT,
    datetime: DataTypes.DATE,
    sendto: DataTypes.INTEGER,
    receivefrom: DataTypes.INTEGER,
    currentcotation: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};