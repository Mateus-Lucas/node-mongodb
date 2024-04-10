const { json } = require("express")
const Cliente = require("../models/Cliente")

const ClienteController = {

    getAll: async (req, res) => {

        const campos = Object.keys(Cliente.schema.paths)

        const filtros = {}

        for (let campo in req.query) {
            if (campos.includes(campo)) {
                filtros[campo] = { $regex: new RegExp(req.query[campo], 'i') }
            }
        }
        res.json(await Cliente.find(filtros))

    },

    get: async (req, res) => {
        try {
            const cliente = await Cliente.findById(req.params.id);
            if (!cliente) {
                res.status(404).json({ error: 'Cliente não encontrado' });
                return;
            }
            res.json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    },

    create: async (req, res) => {
        try {
            const cliente = await Cliente.create(req.body);
            if (!cliente) {
                res.status(400).json({ error: 'Cliente não encontrado' });
                return;
            }
            res.json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body);
            if (!cliente) {
                res.status(404).json({ error: 'Cliente não encontrado' });
                return;
            }
            res.json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const cliente = await Cliente.findByIdAndDelete(req.params.id);
            if (!cliente) {
                res.status(404).json({ error: 'Cliente não encontrado' });
                return;
            }
            res.json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = ClienteController