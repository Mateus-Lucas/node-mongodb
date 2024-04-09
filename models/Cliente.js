const mongoose = require('mongoose');

const { Schema } = mongoose;

const clienteSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true 
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
