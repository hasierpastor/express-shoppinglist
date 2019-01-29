const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// require our routes/index.js file
const itemRoutes = require('./routes');

app.use(bodyParser.json());

app.use(itemRoutes);

app.get('/', (req, res) => {
  return res.json('Start with /items');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
