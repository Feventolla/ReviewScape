const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { connectToDatabase } = require('./database');
const config = require('./config');

const app = express();
const port = config.port;

app.use(bodyParser.json());
app.use('/', routes);

connectToDatabase();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});