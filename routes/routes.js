// Roteando o express
const express = require('express');
const router = express.Router();

// req: requisição
// res: resposta

router.get('/', function (req, res) {
    res.json({})
})

// Exportando o router
module.exports = router;
