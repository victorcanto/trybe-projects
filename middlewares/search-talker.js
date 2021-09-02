const { readTalkers } = require('../services/fs');

const { HTTP_OK_STATUS } = require('../constants');

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

  if (!filteredTalkers) return res.status(HTTP_OK_STATUS).json([]);
  
  return res.status(HTTP_OK_STATUS).json(filteredTalkers);
}

module.exports = { searchTalkers };