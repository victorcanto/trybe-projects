const fs = require('fs').promises;

const filename = 'talker.json';

async function readTalkers() {
  const talkers = await fs
    .readFile(filename, 'utf8')
    .then((fileContent) => JSON.parse(fileContent))
    .catch((error) => {
      console.log(`Talkers not found, error: ${error}`);
    });

  return talkers;
}

async function writeTalkers(updatedTalkers) {
  try {
    await fs.writeFile(filename, JSON.stringify(updatedTalkers));
    console.log('Write Sucess');
  } catch (error) {
    console.error(`Write Failed Error: ${error}`);
  }
}

module.exports = { readTalkers, writeTalkers };
