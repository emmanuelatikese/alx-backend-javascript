const express = require('express');

const app = express();
const PORT = 1245;

const routes = require('./routes/index');

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
