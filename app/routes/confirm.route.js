const express = require("express");
const router = express.Router();
const confirmController = require("../controller/confirm.controller");

router.route("/confirm").post(confirmController.result);
router.route("/confirm/checker").post(confirmController.whitelistChecker);
// Consent
router
  .route("/confirm/1")
  .post(confirmController.updateConfirmation)
  .get(confirmController.getConfirmation);
router
  .route("/confirm/exam/1")
  .post(confirmController.updateExamination1)
  .get(confirmController.getExamination1);
router
  .route("/confirm/exam/2")
  .post(confirmController.updateExamination2)
  .get(confirmController.getExamination2);
router
  .route("/confirm/exam/3")
  .post(confirmController.updateExamination3)
  .get(confirmController.getExamination3);
router
  .route("/confirm/exam/4")
  .post(confirmController.updateExamination4)
  .get(confirmController.getExamination4);
router
  .route("/confirm/exam/5")
  .post(confirmController.updateExamination5)
  .get(confirmController.getExamination5);

// Submit
router.route("/confirm/submit").post(confirmController.submit);

module.exports = router;
