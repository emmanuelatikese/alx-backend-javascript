const fs = require('fs').promises;

const countStudents = (path) => fs.readFile(path, 'utf8')
  .then((data) => {
    const newStudent = data.trim().split('\n');
    const header = newStudent[0].trim().split(',');
    const rows = newStudent.slice(1).map((r) => r.trim().split(','));
    const jsonData = rows.map((row) => header.reduce((acc, key, index) => {
      acc[key] = row[index];
      return acc;
    }, {}));

    console.log(`Number of students: ${jsonData.length}`);

    const numCs = jsonData.filter((x) => x.field === 'CS');
    const numSWE = jsonData.filter((x) => x.field === 'SWE');

    console.log(`Number of students in CS: ${numCs.length}. List: ${numCs.map((x) => x.firstname).join(', ')}`);
    console.log(`Number of students in SWE: ${numSWE.length}. List: ${numSWE.map((x) => x.firstname).join(', ')}`);

    return true;
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });

module.exports = countStudents;
