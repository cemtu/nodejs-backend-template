const http = require('http');
const app = require('./app');

// process.env.NODE_ENV = 'development';
process.env.NODE_ENV = 'staging';
// process.env.NODE_ENV = 'production';

// eslint-disable-next-line no-unused-vars
const config = require('./config/config.js');

const port = global.gConfig.node_port || 3001;

const server = http.createServer(app);

server.listen(port);
