const http = require('http');
const countStudents = require('./3-read_file_async');

const db = process.argv[2] || '';
const port = 1245;
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') { res.end('Hello Holberton School!'); }
  if (req.url === '/students') {
    countStudents(db).then((x) => {
      res.write('This is the list of our students\n');
      x.forEach((msg) => res.write(`${msg}`));
      res.end();
    }).catch((err) => {
      res.statusCode = 500;
      res.write(err.message);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});
app.listen(port, () => console.log(`listening on port: ${port}`));
module.exports = app;
