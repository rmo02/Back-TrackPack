const express = require('express');
const { rastrearEncomendas } = require('correios-brasil');

const router = express.Router();

//exemplo da rota "/encomenda?codigos=AB123456789BR,CD987654321BR"

router.get('/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { codigos } = req.query;
  if (!codigos) {
    return res.status(400).json({ message: 'Códigos de encomenda não informados' });
  }
  try {
    const eventos = await rastrearEncomendas(codigos.split(','));
    res.json(eventos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;