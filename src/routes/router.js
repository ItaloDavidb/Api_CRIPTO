const express = require('express')
const router = express.Router()
const WalletController = require('../controllers/WalletController')
//-----------------------------------All the Routes------------------------------------------------//
router.get('/wallet', WalletController.read)
router.get('/wallet/:id', WalletController.readOne)
router.post('/wallet/', WalletController.create)
router.delete('/wallet/:id', WalletController.delete)
router.post('/wallet/:id/transaction', WalletController.transfer)
router.put('/wallet/:id', WalletController.addfunds)
router.get('/wallet/:id/transaction', WalletController.readTransac)


module.exports = app => app.use('/api/v1',router)
