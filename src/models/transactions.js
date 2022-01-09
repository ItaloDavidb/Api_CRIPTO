'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
  
    static associate(models) {
      Transactions.belongsTo(models.Coins,{
        foreignKey:'adress_coins'
      })
      Transactions.belongsTo(models.Wallets,{
        foreignKey:'adress_wallet'
      })
    }
  };
  Transactions.init({
    adress_transc: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    value: DataTypes.FLOAT,
    datetime: DataTypes.DATE,
    adress_coins: DataTypes.INTEGER,
    address_wallet: DataTypes.INTEGER,
    sendto: DataTypes.INTEGER,
    receivefrom: DataTypes.INTEGER,
    currentcotation: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};