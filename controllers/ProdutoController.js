const { json } = require("express")
const Produto = require("../models/Produtos")

const ProdutoController = {

    getAll: async (req, res) => {
        res.json(await Produto.find())
    },

    get: async (req, res) => {
        try {
            const produto = await Produto.findById(req.params.id);
            if (!produto) {
                res.status(404).json({ error: 'Produto não encontrado' });
                return;
            }
            res.json(produto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    },

    create: async (req, res) => {
        try {
            const produto = await Produto.create(req.body);
            if (!produto) {
                res.status(400).json({ error: 'Produto não encontrado' });
                return;
            }
            res.json(produto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const produto = await Produto.findByIdAndUpdate(req.params.id, req.body);
            if (!produto) {
                res.status(404).json({ error: 'Produto não encontrado' });
                return;
            }
            res.json(produto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const produto = await Produto.findByIdAndDelete(req.params.id);
            if (!produto) {
                res.status(404).json({ error: 'Produto não encontrado' });
                return;
            }
            res.json(produto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = ProdutoController