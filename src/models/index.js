const cors = require('cors');
const express = require('express');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());
  }

  routes() {
    // eslint-disable-next-line global-require
    this.app.use('/api', require('../routes/link'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port: ${this.port}`);
    });
  }
}

module.exports = Server;
