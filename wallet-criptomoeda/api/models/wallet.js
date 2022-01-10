'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Wallet.hasMany(models.Coin, {
        foreignkey: "transactions"
      })
      Wallet.hasMany(models.Transaction, {
        foreignKey: 'transactions'
    })
   }
  };
  Wallet.init({
    address: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Wallet',
  });
  return Wallet;
};