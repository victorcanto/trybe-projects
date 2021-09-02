const { readTalkers } = require('../services/fs');

const { HTTP_OK_STATUS, HTTP_NOT_FOUND_STATUS } = require('../constants');

async function findTalker(req, res) {
  const { id } = req.params;
  const talkers = await readTalkers();
  const talkerFound = talkers.find((t) => t.id === parseInt(id, 10));

  if (!talkerFound) {
    return res
      .status(HTTP_NOT_FOUND_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(HTTP_OK_STATUS).json(talkerFound);
}

module.exports = { findTalker };
