const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router
  .route("/users")
  .get(userController.getAllUser)
  .post(userController.createUser);

router
  .route("/users/:email")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
