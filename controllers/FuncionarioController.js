const { json } = require("express")
const Funcionario = require('../models/Funcionario')

const FuncionarioController = {

    getAll: async (req, res) => {

        const campos = Object.keys(Funcionario.schema.paths)

        const filtros = {}

        for (let campo in req.query) {
            if (campos.includes(campo)) {
                filtros[campo] = { regex: new RegExp(req.query[campo], 'i') }
            }
        }
        res.json(await Funcionario.find(filtros))

    },

    get: async (req, res) => {
        try {
            const funcionario = await Funcionario.findById(req.params.id);
            if (!funcionario) {
                res.status(404).json({ error: 'Funcionario não encontrado' });
                return;
            }
            res.json(funcionario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    },

    create: async (req, res) => {
        try {
            const funcionario = await Funcionario.create(req.body);
            if (!funcionario) {
                res.status(400).json({ error: 'Funcionario não encontrado' });
                return;
            }
            res.json(funcionario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body);
            if (!funcionario) {
                res.status(404).json({ error: 'Funcionario não encontrado' });
                return;
            }
            res.json(funcionario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
            if (!funcionario) {
                res.status(404).json({ error: 'Funcionario não encontrado' });
                return;
            }
            res.json(funcionario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = FuncionarioController