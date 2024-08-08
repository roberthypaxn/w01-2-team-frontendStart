const routes = require("express").Router();
const controller = require("../controllers");

routes.get('/', controller.bobby);

routes.get('/robert', controller.robert);

routes.get('/love', controller.love);

module.exports = routes;