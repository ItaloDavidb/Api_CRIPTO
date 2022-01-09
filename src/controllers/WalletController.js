const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const axios = require('axios')

class WalletController{
    static async read(req,res){
        const {coin,nome,cpf,birthdate,amount,createdAt,updatedAt} = req.query
        const where = {}
        const wherecoin = {}
        cpf ? where.cpf = {} : null
        cpf ? where.cpf[Op.eq] = cpf : null
        nome ? where.nome = {} : null
        nome ? where.nome[Op.eq] = nome : null
        birthdate ? where.birthdate = {} : null
        birthdate ? where.birthdate[Op.eq] = birthdate : null
        amount ? where.amount = {} : null
        amount ? where.amount[Op.eq] = amount : null
        createdAt ? where.createdAt = {} : null
        createdAt ? where.createdAt[Op.eq] = createdAt : null
        updatedAt ? where.updatedAt = {} : null
        updatedAt ? where.updatedAt[Op.eq] = updatedAt : null
        coin ? wherecoin.coin = {} : null
        coin ? wherecoin.coin[Op.eq] = coin : null
        const data = await axios.get('https://economia.awesomeapi.com.br/json/last/eth')
        //const currentcotation = data.data.ETHBRL.high
        
        
            
        
        try{
            const readall = await database.Wallets.findAll(
                {
                where,
                attributes:['nome','cpf','birthdate'],
                include:[
                    {   wherecoin,
                        model:database.Coins,
                        attributes:['coin','fullname','amount'], 
                        as: 'Coins',
                        include:[{
                            model:database.Transactions,
                            attributes:['value','datetime','sendto','receivefrom',`currentcotation`]
                        }
                            
                        ]
                    }

                ]
            })
            return res.status(200).json({
                "wallet":readall
            })
        }catch(err){
            return res.status(500).json(err.message)        
        }
        
    }
    static async readOne(req,res){
        const {id} = req.params
        try{
            const readone = await database.Wallets.findOne({
                where:{
                    adress:Number(id)
                },
                attributes:['nome','cpf','birthdate'],
                include:[{
                    model:database.Coins,
                    attributes:['coin','fullname','amount'], 
                    as: 'Coins',
                    include:[{
                        model:database.Transactions,
                        attributes:['value','datetime','sendto','receivefrom','currentcotation']
                    }
                        
                    ]
                }]
            })
            if (readone === null) throw new Error ('ID NÃO ENCONTRADO')
            return res.status(200).json(readone)
        }catch(err){
            return res.status(404).send('ID NÃO ENCONTRADO')
        }
    }
    static async create(req,res){
        const data = req.body
        try{
            const creating = await database.Wallets.create(data)
            return res.status(201).json(creating)
            
        }catch(err){
            return res.status(500).send('CPF JÁ CADASTRADO')
        }

    }
    static async delete(req,res){
        const {id} = req.params
        if(id === null) throw new Error('ID NÃO ENCONTRADO')
        try{
            await database.Wallets.destroy({
                where:{
                    adress:Number(id)
                }
            })
            return res.status(204).end()
        }catch(err){
            return res.status(500).send(err)
        }
    }
    static async transfer(req,res){
        const {id} = req.params
        const newdata = req.body
        console.log(newdata)
        if (id === null) throw new Error ('ID NÃO ENCONTRADO')
        try{
            await database.Coins.update(newdata,{
                where:{
                    adress_wallet:id,
                    coin:newdata.quoteTo,
                    amount: + newdata.value
                }
            })
            
        }catch(err){
            console.log(err)
        }
    }
    static async addfunds(req,res){

    }
    static async readTransac(req,res){
        const {id} = req.params
        
        try{
            const readone = await database.Coins.findAll({
                where:{
                    adress_wallet:Number(id)
                },
                attributes:['coin','fullname','amount'],
                include:[{
                    model:database.Transactions,
                    attributes:['value','datetime','sendto','receivefrom','currentcotation'], 
                    as: 'Transactions',
                    
                }]
            })
            if (readone === null) throw new Error ('ID NÃO ENCONTRADO')
            return res.status(200).json(readone)
        }catch(err){
            return res.status(404).send('ID NÃO ENCONTRADO')
        }
    }

} 
module.exports = WalletController
