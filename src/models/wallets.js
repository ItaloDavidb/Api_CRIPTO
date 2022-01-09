'use strict';
const { DATEONLY } = require('sequelize');
const { DATE } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Wallets.hasMany(models.Coins,{
       foreignKey:'adress_wallet'
     })
     Wallets.hasMany(models.Transactions,{
       foreignKey:'adress_wallet'
     })
    }
  };
  Wallets.init({
    adress: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: {
      type:DataTypes.STRING,
      validate:{
        validation: function(dado){
          if(dado.length <= 7) throw new Error('CAMPO NOME DEVE TER MAIS DE 7 CARACTERES')

          
        }
      }
    },
    cpf:{
        type:DataTypes.STRING,
        unique:{args:true,msg:'CPF JÁ CADASTRADO'},
        validate:{
          
          validation: function(dado){
            if(dado.length <= 13) throw new Error('CAMPO CPF INVALIDO')
  
            
          }
        }
        
        }

    ,
    birthdate: {
      type:DataTypes.DATEONLY,
      validate:{
        isDate:true,
        validation: function(dado){
          const today = new Date()
          const age = new Date(dado)
          if(today.getFullYear() - age.getFullYear() < 18) throw new Error('VOCÊ DEVE SER MAIOR DE 18')
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Wallets',
    
  });
  return Wallets;
};