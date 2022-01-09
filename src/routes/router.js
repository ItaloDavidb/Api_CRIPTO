const express = require('express')
const router = express.Router()
const WalletController = require('../controllers/WalletController')
//-----------------------------------All the Routes------------------------------------------------//
router.get('/wallet', WalletController.read)
router.get('/wallet/:id', WalletController.readOne)
router.post('/wallet/', WalletController.create)





module.exports = app => app.use('/api/v1',router)
