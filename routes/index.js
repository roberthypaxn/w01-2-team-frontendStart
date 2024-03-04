const routes = require("express").Router();
const lesson1 = require("../controllers/lesson1");

routes.get('/', lesson1.bobby);

routes.get('/robert', lesson1.robert);

module.exports = routes;