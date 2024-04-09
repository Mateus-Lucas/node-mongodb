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
                return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(v); // Verifica se o CPF está no formato XXX.XXX.XXX-XX
            },
            message: props => `${props.value} não é um CPF válido!`
        }
    },
    endereco: {
        type: String
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Feminino', 'Outro'] // Define um conjunto de valores possíveis para o sexo
    },
    telefone: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\(\d{2}\) \d{4,5}\-\d{4}$/.test(v); // Verifica se o telefone está no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
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
