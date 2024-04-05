const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minlenght: 2,
        maxlenght: 100,
        trim: true
    },
    preco: {
        type: Number,
        default: 0,
        min: [0, 'teste'],
        match: [/^\d+(\.\d+)?$/, 'O preço deve ser um número positivo']
    },
    tamanho: String,
    tipo: String,
    ingredientes: []
}, { timestamps: true })

const Produto = mongoose.model('Produto', schema)

module.exports = Produto

