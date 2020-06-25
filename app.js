const express = require('express');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const apiRoutes = require('./api/index');
const swaggerDocument = require('./swagger.json');

const app = express();

// eslint-disable-next-line no-unused-vars
const config = require('./config/config.js');

// mongoose connection
mongoose
  .connect(
    `mongodb+srv://${global.gConfig.user}:${global.gConfig.password}@main-9t3ey.mongodb.net/Main?retryWrites=true&w=majority`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  // eslint-disable-next-line no-console
  .then(() => console.log('Server Connected'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
  return null;
});

// routes
app.use('/api', apiRoutes);
app.use('/swagger', swaggerUi.serve);
app.get('/swagger', swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
