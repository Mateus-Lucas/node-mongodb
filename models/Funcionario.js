const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
        trim: true
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
    endereco: {
        type: String
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Feminino', 'Outro'] 
    },
    telefone: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\(\d{2}\) \d{4,5}\-\d{4}$/.test(v); 
            },
            message: props => `${props.value} não é um número de telefone válido!`
        }
    },
    cargo: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Funcionario = mongoose.model('Funcionario', schema);

module.exports = Funcionario;
