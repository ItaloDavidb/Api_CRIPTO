'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coins extends Model {
    
    static associate(models) {
      Coins.hasMany(models.Transactions,{
        foreignKey:'adress_coins'
      })
      Coins.belongsTo(models.Wallets,{
        foreignKey:'adress_wallet'
      })
    }
  };
  Coins.init({
    adress_coins: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    adress_wallet: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coins',
  });
  return Coins;
};