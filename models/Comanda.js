const mongoose = require('mongoose');

const { Schema } = mongoose;

const comandaSchema = new Schema({
    mesa: {
        type: String,
        required: true,
        maxlength: 45
    },
    dataPagamento: {
        type: Date,
        default: null
    },
    data: {
        type: Date,
        default: Date.now
    }
});

const Comanda = mongoose.model('Comanda', comandaSchema);

module.exports = Comanda;
