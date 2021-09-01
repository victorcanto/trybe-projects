const { readTalkers } = require('../services/fs');

async function getTalkers(req, res) {
  const talkers = await readTalkers();

  if (!talkers) return res.status(200).send([]);

  return res.status(200).json(talkers);
}

module.exports = { getTalkers };