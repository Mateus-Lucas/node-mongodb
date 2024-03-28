
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    valor: Number
})

const Comanda = mongoose.model('Comanda', schema)

module.exports = Comanda

