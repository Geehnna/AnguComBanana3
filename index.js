const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// Importando os arquivos JS externos
const imagens = require('./public/imagens.js');
const texto = require('./public/texto.js');
const pessoas = require('./public/carregarPessoas.js');

app.get('/', (req, res) => {
    res.render('index', { pessoas, imagens, texto });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

