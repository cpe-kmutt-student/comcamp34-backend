const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const authJwt = require("../middleware/authJwt");

router.route("/users/:uid").post(userController.createUser);

// router.route("/users").post(authJwt.verifyToken, userController.test);

module.exports = router;
