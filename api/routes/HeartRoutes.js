const { getHearts, postHearts } = require("../controllers/HeartsController");

const routes = require("express").Router();

routes.post("/heart/:id", getHearts);
routes.post("/post/heart/:id", postHearts);

module.exports = routes;
