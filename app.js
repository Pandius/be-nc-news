const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRouter');
const {
  handleCustomErrors,
  handleSQLErrors,
  routeNotFound
} = require('./errors/index');

app.use(express.json());

app.use('/api', apiRouter);
app.use('/*', routeNotFound);
app.use(handleSQLErrors);
app.use(handleCustomErrors);

module.exports = app;