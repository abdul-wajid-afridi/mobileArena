const router = require("express").Router();

const Controller = require("../controllers/dashboardController");

router.get("/", Controller.home);

module.exports = router;
