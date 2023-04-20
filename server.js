const express = require('express');
const cepRoutes = require('./src/routes/cepRoutes');
const encomendaRoutes = require('./src/routes/encomendaRoutes');

const app = express();

// Adiciona as rotas de consulta de CEP
app.use('/cep', cepRoutes);

// Adiciona as rotas de rastreamento de encomendas
app.use('/encomenda', encomendaRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});