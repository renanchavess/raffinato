

const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');

class App {
  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.server.use(cors());
    this.routes();
  }

  routes() {
    this.server.use('/', routes);
  }

}
 
module.exports = new App().server;