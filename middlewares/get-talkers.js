const { readTalkers } = require('../services/fs');

const { HTTP_OK_STATUS } = require('../constants');

async function getTalkers(req, res) {
  const talkers = await readTalkers();

  if (!talkers) return res.status(HTTP_OK_STATUS).send([]);

  return res.status(HTTP_OK_STATUS).json(talkers);
}

module.exports = { getTalkers };