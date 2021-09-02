const { readTalkers, writeTalkers } = require('../services/fs');
const { HTTP_CREATED_STATUS } = require('../constants');

async function addTalker(req, res) {
  const { name, age, talk } = req.body;
  const talkers = await readTalkers();
  const id = talkers.length + 1;

  const newTalker = {
    id,
    name,
    age,
    talk,
  };

  talkers.push(newTalker);

  await writeTalkers(talkers);
  return res.status(HTTP_CREATED_STATUS).json(newTalker);
}

module.exports = { addTalker };

// Source Ref:
// Aluno Mauricio Viegas:  https://github.com/tryber/sd-010-a-project-talker-manager/commit/b93b884e91054f946ddeb155b94f4a405bfdf6af
