const cors = require('cors');
const express = require('express');
const { DbConnection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.DbConnect();

    this.middlewares();

    this.routes();
  }

  // eslint-disable-next-line class-methods-use-this
  async DbConnect() {
    await DbConnection();
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
