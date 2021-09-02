const { readTalkers } = require('../services/fs');

function filterTalkers(q, talkers) {
  return talkers
  .filter(({ name, talk: { watchedAt } }) => name.includes(q) || watchedAt.includes(q));
}

async function searchTalkers(req, res, next) {
  const { q } = req.query;
  const talkers = await readTalkers();

  const qIsNotValid = !q || q === undefined;
  
  if (qIsNotValid) next();

  const filteredTalkers = filterTalkers(q, talkers);

  if (!filteredTalkers) return res.status(200).json([]);
  
  return res.status(200).json(filteredTalkers);
}

module.exports = { searchTalkers };