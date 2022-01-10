const { Router } = require('express')
const WalletController = require('../controllers/WalletController')

const router = Router()

router.get('/wallets', WalletController.allwallets)
router.get('/wallets/:id', WalletController.oneWallet)
router.post('/wallets', WalletController.createWallet)
router.put('/wallets/:id', WalletController.updateWallet)
router.delete('/wallets/:id', WalletController.deleteWallet)

module.exports = router