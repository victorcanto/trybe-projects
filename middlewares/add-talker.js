const { getTalkers, setTalker } = require('../services/fs');

async function addNewTalker(req, res) {
  const { name, age, talk } = req.body;
  const talkers = await getTalkers();
  const id = talkers.length + 1;

  const newTalker = {
    id,
    name,
    age,
    talk,
  };
  
  talkers.push(newTalker);

  await setTalker(talkers);
  return res.status(201).json(newTalker);
}

module.exports = { addNewTalker };

// Source Ref: 
// Aluno Mauricio Viegas:  https://github.com/tryber/sd-010-a-project-talker-manager/commit/b93b884e91054f946ddeb155b94f4a405bfdf6af