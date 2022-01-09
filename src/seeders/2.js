'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Coins', [{
        coin: 'BTC',
        fullname:'Bitcoin',
        amount:0.010003,
        adress_wallet: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        coin: 'ETH',
        fullname:'Etherium',
        amount:0.010003,
        adress_wallet: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        coin: 'ETH',
        fullname:'Etherium',
        amount:0.60,
        adress_wallet: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        coin: 'BTC',
        fullname:'Bitcoin',
        amount:0.50,
        adress_wallet: 2,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        coin: 'ETC',
        fullname:'Etherium',
        amount:0.50,
        adress_wallet: 3,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        coin: 'BTC',
        fullname:'Bitcoin',
        amount:0.50,
        adress_wallet: 3,
        createdAt: new Date(),
        updatedAt: new Date()

      },
    ], {});
    
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
