const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String    
}, {timestamps: true})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto

