const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.route("/users").post(userController.createUser);

// router.route("/users").post(authJwt.verifyToken, userController.test);

module.exports = router;
