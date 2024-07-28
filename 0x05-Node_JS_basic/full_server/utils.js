const fs = require('fs').promises;

const readDatabase = (path) => fs.readFile(
  path, 'utf8',
).then((data) => {
  const newStudent = data.trim().split('\n');
  const header = newStudent[0].trim().split(',');
  const rows = newStudent.slice(1).map((r) => r.trim().split(','));
  const jsonData = rows.map((row) => header.reduce((acc, key, index) => {
    acc[key] = row[index];
    return acc;
  }, {}));
  const numCs = jsonData.filter((x) => x.field === 'CS').map((x) => x.firstname);
  const numSWE = jsonData.filter((x) => x.field === 'SWE').map((x) => x.firstname);
  const newObject = { SWE: numSWE.sort(), CS: numCs.sort() };
  console.log(newObject);
  return newObject;
}).catch(() => {
  throw new Error('Cannot load the database');
});
module.exports = readDatabase;
