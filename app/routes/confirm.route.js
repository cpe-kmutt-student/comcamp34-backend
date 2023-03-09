const express = require("express");
const router = express.Router();
const confirmController = require("../controller/confirm.controller");

router.route("/confirm").get(confirmController.x);

// Consent
router
  .route("/confirm/1")
  .post(confirmController.updateConfirmation)
  .get(confirmController.getConfirmation);

// Submit
router.route("/confirm/submit").post(confirmController.submit);

module.exports = router;
