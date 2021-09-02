const { readTalkers, writeTalkers } = require('../services/fs');

const { HTTP_OK_STATUS } = require('../constants');

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
  return res.status(HTTP_OK_STATUS).json(editedTalker);
}

module.exports = { editTalker };