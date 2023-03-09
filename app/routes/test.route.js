const express = require("express");
const router = express.Router();
const testController = require("../controller/test.controller");

router.route("/tests/0").post();

module.exports = router;
