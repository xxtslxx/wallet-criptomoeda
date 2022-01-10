const database = require('../models')

class WalletController {
    static async allwallets(req, res) {
        try{
            const allwallets = await database.Wallet.findAll()
        return res.status(200).json(allwallets)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    static async oneWallet(req, res) {
       const { id } = req.params
       try {
          const oneWallet = await database.Wallet.findOne( {where: { id: Number(id) } } )
          return res.status(200).json(oneWallet)
        } catch (erro) {
          return res.status(404).json(error.message)
        }
    }

    static async createWallet(req, res) {
        const newWallet = req.body
        try{
            const newWalletCreate = await database.Wallet.create(newWallet)
            return res.status(201).json(newWalletCreate)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateWallet(req, res) {
       const { id } = req.params
       const newInfos = req.body
       try {
          await database.Wallet.update(newInfos, { where: { id: Number(id) }})
          const walletUpdated = await database.Wallet.findOne({ where:{ id: Number(id) }})
          return res.status(200).json(walletUpdated)
        } catch (error) {
          return res.status(500).json(error.message)
        }

   }

   static async deleteWallet(req, res) {
       const { id } = req.params
       try {
          await database.Wallet.destroy( { where: {id: Number(id) }})
          return res.status(204).json({ mensagem: `id ${id} excluido`})
       } catch (error) {
         return res.status(404).json(error.message)
       }
   }

}

module.exports = WalletController