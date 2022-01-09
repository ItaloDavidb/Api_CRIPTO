'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      adress_transc: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.FLOAT
      },
      datetime: {
        type: Sequelize.DATE
      },
     adress_coins: {
       allowNull:false,
        type: Sequelize.INTEGER,
        references:{model:'Coins', key:'adress_coins'}},
      adress_wallet: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'Wallets', key:'adress'}
      },
      sendto: {
        type: Sequelize.INTEGER
      },
      receivefrom: {
        type: Sequelize.INTEGER
      },
      currentcotation: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};