const express = require('express');
const { consultarCep } = require('correios-brasil');

const router = express.Router();

router.get('/:cep', async (req, res) => {
  const { cep } = req.params;
  console.log(cep);
  try {
    const endereco = await consultarCep(cep);
    res.json(endereco);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;