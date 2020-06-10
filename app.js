const express = require('express');
const apiRoutes = require('./api/index');

const app = express();

app.use('/api', apiRoutes);

module.exports = app;
