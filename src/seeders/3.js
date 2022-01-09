'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Transactions', [{
        value:0.0123110,
        datetime: new Date(),
        adress_coins:1,
        adress_wallet:1,
        sendto:1,
        receivefrom:1,
        currentcotation:0.014,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        value:0.0123110,
        datetime: new Date(),
        adress_coins:2,
        adress_wallet:1,
        sendto:1,
        receivefrom:1,
        currentcotation:0.015,
        createdAt: new Date(),
        updatedAt: new Date()

      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
