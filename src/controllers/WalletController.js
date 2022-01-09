const database = require('../models')

class WalletController{
    static async read(req,res){
        try{
            const readall = await database.Wallets.findAll()
            return res.status(200).json(readall)
        }catch(err){
            return res.status(500).json(err.message)        
        }
        
    }
    static async readOne(req,res){
        const {id} = req.params
        try{
            const readone = await database.Wallets.findOne({where:{adress:Number(id)}})
            if (readone === null) throw new Error ('ID NÃO')
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
} 
module.exports = WalletController