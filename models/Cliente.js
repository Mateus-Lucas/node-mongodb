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
        unique: true,
        validate: {
            validator: function (v) {
                return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(v);
            },
            message: props => `${props.value} não é um CPF válido!`
        }
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
