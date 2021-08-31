const fs = require('fs').promises;

const filename = 'talker.json';

async function getTalkers() {
  const talkers = await fs
    .readFile(filename, 'utf8')
    .then((fileContent) => JSON.parse(fileContent))
    .catch((error) => {
      console.log(`Talkers not found, error: ${error}`);
    });

  return talkers;
}

module.exports = { getTalkers };
