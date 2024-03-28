// Roteando o express
const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');
const ComandaController = require('../controllers/ComandaController');
const router = express.Router();

// req: requisição
// res: resposta

router.get('/', function (req, res) {
    res.json()
})

// CRUD com Controladres
router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))

router.get('/comanda', (req, res) => ComandaController.getAll(req, res))
router.post('/comanda', (req, res) => ComandaController.create(req, res))
router.get('/comanda/:id', (req, res) => ComandaController.get(req, res))
router.delete('/comanda/:id', (req, res) => ComandaController.delete(req, res))
router.put('/comanda/:id', (req, res) => ComandaController.update(req, res))



// Exportando o router
module.exports = router;
