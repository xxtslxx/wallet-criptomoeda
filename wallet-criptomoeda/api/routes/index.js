const bodyParser = require('body-parser')
const wallets = require('./walletRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(wallets)
}