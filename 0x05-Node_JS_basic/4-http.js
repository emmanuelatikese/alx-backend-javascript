const app = require('http');

const port = 1245;
const server = app.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
server.listen(port, () => console.log(`listening on port: ${port}`));
