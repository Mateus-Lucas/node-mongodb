// Pegando express de node_mudules
const express = require('express')

// Utilizando o express
const app = express()

app.use(express.json()) 
app.use(express.urlencoded({extended: false}))

const conn = require('./db/conn')
conn()

// Criando rota
app.get('/', function (req, res) {
    res.json({msg: 'Rota principal'}) // Rota Principal
}) 

// Rodando o express
app.listen(3000, function(){
    console.log('Servidor on');
})
