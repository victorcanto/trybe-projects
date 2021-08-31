const express = require('express');

const router = express.Router();

const { getTalkers } = require('../services/readFile');

async function getTalkerById(id) {
  const talkers = await getTalkers();
  const talkerFound = await talkers.find((t) => t.id === parseInt(id, 10));
  return talkerFound;
}

// 1 - Crie o endpoint GET /talker

router.get('/', async (_req, res) => {
  const talkers = await getTalkers();

  if (!talkers) return res.status(200).send([]);

  return res.status(200).json(talkers);
});

// 2 - Crie o endpoint GET /talker/:id

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkerFound = await getTalkerById(id);

  if (!talkerFound) {
    return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talkerFound);
});

module.exports = router;
