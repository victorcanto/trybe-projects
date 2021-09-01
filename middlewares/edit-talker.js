const { readTalkers, writeTalkers } = require('../services/fs');

async function editTalker(req, res) {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const talkers = await readTalkers();
  const talkerIndex = talkers.findIndex((t) => t.id === parseInt(id, 10));

  const editedTalker = {
    id: parseInt(id, 10),
    name,
    age,
    talk,
  };

  talkers[talkerIndex] = editedTalker;

  await writeTalkers(talkers);
  return res.status(200).json(editedTalker);
}

module.exports = { editTalker };