const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2] || ''; return readDatabase(dbPath)
      .then((data) => {
        res.statusCode = 200;
        res.write('This is the list of our students');
        const CsStudents = data.CS;
        const SWEStudents = data.SWE;
        res.write(`Number of students in CS: ${CsStudents.length}. List: ${CsStudents.join(',')}`);
        res.write(`Number of students in SWE: ${SWEStudents.length}. List: ${SWEStudents.join(',')}`);
        res.end();
      }).catch(() => {
        res.statusCode = 500;
        res.write('Cannot load the database');
        res.end();
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' || major !== 'SWE') {
      res.statusCode = 400;
      res.write('Major parameter must be CS or SWE');
      res.end();
    }
    readDatabase('databases.csv')
      .then((data) => {
        res.statusCode = 200;
        res.write(`Number of students in ${major}: ${data[major].length}. List: ${data[major].join(',')}`);
        res.end();
      }).catch(() => {
        res.statusCode = 500;
        res.write('Cannot load the database');
        res.end();
      });
  }
}

module.exports = StudentsController;
