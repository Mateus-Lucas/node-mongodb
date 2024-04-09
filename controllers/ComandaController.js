const { json } = require("express")
const Comanda = require('../models/Comanda')

const ComandaController = {

    getAll: async (req, res) => {

        const campos = Object.keys(Comanda.schema.paths)

        const filtros = {}

        for (let campo in req.query) {
            if (campos.includes(campo)) {
                filtros[campo] = { regex: new RegExp(req.query[campo], 'i') }
            }
        }
        res.json(await Comanda.find(filtros))

    },

    get: async (req, res) => {
        try {
            const comanda = await Comanda.findById(req.params.id);
            if (!comanda) {
                res.status(404).json({ error: 'Comanda não encontrado' });
                return;
            }
            res.json(comanda);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    },

    create: async (req, res) => {
        try {
            const comanda = await Comanda.create(req.body);
            if (!comanda) {
                res.status(400).json({ error: 'Comanda não encontrado' });
                return;
            }
            res.json(comanda);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const comanda = await Comanda.findByIdAndUpdate(req.params.id, req.body);
            if (!comanda) {
                res.status(404).json({ error: 'Comanda não encontrado' });
                return;
            }
            res.json(comanda);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const comanda = await Comanda.findByIdAndDelete(req.params.id);
            if (!comanda) {
                res.status(404).json({ error: 'Comanda não encontrado' });
                return;
            }
            res.json(comanda);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = ComandaController