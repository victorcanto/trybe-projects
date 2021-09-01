const { readTalkers, writeTalkers } = require('../services/fs');

async function deleteTalker(req, res) {
  const { id } = req.params;
  const talkers = await readTalkers();
  const talkerIndex = talkers.findIndex((t) => t.id === parseInt(id, 10));

  talkers.splice(talkerIndex, 1);

  await writeTalkers(talkers);
  return res.status(200)
  .json({ message: 'Pessoa palestrante deletada com sucesso' });
}

module.exports = { deleteTalker };