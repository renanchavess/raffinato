const { Router } = require('express');
const routes = new Router();

const IndexController = require('../app/controllers/IndexController');

routes.get('/', IndexController.show);


module.exports = routes;