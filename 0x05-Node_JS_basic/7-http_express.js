const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;
const db = process.argv[2] || '';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(db).then((x) => {
    res.write('This is the list of our students\n');
    x.forEach((msg) => res.write(`${msg}`));
    res.end();
  }).catch((err) => {
    res.status(500).send(err.message);
  });
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
module.exports = app;
