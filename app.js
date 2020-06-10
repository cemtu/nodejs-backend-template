const express = require('express');
const swaggerUi = require('swagger-ui-express');
const apiRoutes = require('./api/index');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use('/api', apiRoutes);
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));
module.exports = app;
