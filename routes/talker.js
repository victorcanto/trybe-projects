const express = require('express');
const { addNewTalker } = require('../middlewares/add-talker');
const allAuths = require('../middlewares/auth-talker');
const { authToken } = require('../middlewares/auth-token');

const router = express.Router();

const { getTalkers } = require('../services/fs');

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

// 4 - Crie o endpoint POST /talker

router.post('/', authToken, allAuths, addNewTalker);

module.exports = router;
