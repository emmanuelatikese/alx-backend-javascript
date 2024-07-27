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

    const firstMessage = `Number of students: ${jsonData.length}`;
    console.log(firstMessage);

    const numCs = jsonData.filter((x) => x.field === 'CS');
    const numSWE = jsonData.filter((x) => x.field === 'SWE');

    const secondMessage = `Number of students in CS: ${numCs.length}. List: ${numCs.map((x) => x.firstname).join(', ')}`;
    const thirdMessage = `Number of students in SWE: ${numSWE.length}. List: ${numSWE.map((x) => x.firstname).join(', ')}`;
    console.log(secondMessage);
    console.log(thirdMessage);

    return ([`${firstMessage}\n`, `${secondMessage}\n`, thirdMessage]);
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });

module.exports = countStudents;
