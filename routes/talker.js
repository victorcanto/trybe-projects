const express = require('express');

const router = express.Router();

const { getTalkers } = require('../services/readFile');

// 1 - Crie o endpoint GET /talker

router.get('/', async (_req, res) => {
  const talkers = await getTalkers();

  if (!talkers) return res.status(200).send([]);

  return res.status(200).json(talkers);
});

module.exports = router;
