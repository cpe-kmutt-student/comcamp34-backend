const express = require("express");
const router = express.Router();
const pageController = require("../controller/page.controller");

router.route("/pages").post(pageController.testPage);

// PersonalInfo
router
  .route("/pages/1")
  .post(pageController.updatePersonalInfo)
  .get(pageController.getPersonalInfo);

// Education
router
  .route("/pages/2")
  .post(pageController.updateEducation)
  .get(pageController.getEducation);

// Interest
// ParentData
// UploadFile
// Question1
// Question2

module.exports = router;
