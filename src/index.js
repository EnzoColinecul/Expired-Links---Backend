const Server = require('./models/index');

require('dotenv-flow').config();

const server = new Server();

server.listen();
