const { readTalkers } = require('../services/fs');

async function findTalker(req, res) {
  const { id } = req.params;
  const talkers = await readTalkers();
  const talkerFound = talkers.find((t) => t.id === parseInt(id, 10));

  if (!talkerFound) {
    return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talkerFound);
}

module.exports = { findTalker };
