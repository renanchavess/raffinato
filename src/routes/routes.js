const { Router } = require('express');
const routes = new Router();

const IndexController = require('../app/controllers/IndexController');

routes.get('/', IndexController.show);
routes.post('/calculateroute', IndexController.store);


module.exports = routes;