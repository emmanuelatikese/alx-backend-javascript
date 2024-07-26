const http = require('http');

const port = 1245;
const app = app.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
app.listen(port, () => console.log(`listening on port: ${port}`));
module.exports = app;