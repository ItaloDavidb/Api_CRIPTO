
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('Wallets', [        {
        nome: 'fulano aa',
        cpf:'959.499.391-93',
        birthdate: 05/01/2000,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      nome: 'fulano ba',
      cpf:'459.499.391-93',
      birthdate: 05/01/2000,
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
    nome: 'fulano ca',
    cpf:'359.499.391-93',
    birthdate: 05/01/2000,
    createdAt: new Date(),
    updatedAt: new Date()
},], {});
    
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
