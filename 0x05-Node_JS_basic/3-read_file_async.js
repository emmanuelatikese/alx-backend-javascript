const fs = require('fs');

const countStudents = (path) => {
  try {
    const student = fs.readFile(path, 'utf8');

    const newStudent = student.trim().split('\n');
    const header = newStudent[0].trim().split(',');
    const rows = newStudent.slice(1).map((r) => r.trim().split(','));
    const jsonData = rows.map((row) => header.reduce((acc, key, index) => {
      acc[key] = row[index];
      return acc;
    }, {}));
    console.log(`Number of students: ${jsonData.length}`);
    const numCs = jsonData.filter((x) => x.field === 'CS');
    const numSWE = jsonData.filter((x) => x.field === 'SWE');

    console.log(`Number of students in FIELD: ${numCs.length}. List: ${numCs.map((x) => x.firstname).join(', ')}`);
    console.log(`Number of students in FIELD: ${numSWE.length}. List: ${numSWE.map((x) => x.firstname).join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;