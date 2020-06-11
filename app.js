const express = require('express');
const swaggerUi = require('swagger-ui-express');
const apiRoutes = require('./api/index');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use('/api', apiRoutes);
app.use('/swagger', swaggerUi.serve);
app.get('/swagger', swaggerUi.setup(swaggerDocument));
module.exports = app;
