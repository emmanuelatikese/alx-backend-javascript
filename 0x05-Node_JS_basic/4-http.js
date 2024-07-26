const app = require('http');

const port = 1245;
const server = app.createServer((req, res) => {
  res.end('Hello Holberton School!');
});
server.listen(port, () => console.log(`listening on port: ${port}`));
