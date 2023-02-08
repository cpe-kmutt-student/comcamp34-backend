const express = require("express");
const router = express.Router();
const pageController = require("../controller/page.controller");
const fileController = require("../controller/file.controller");
const questionController = require("../controller/question.controller");

router.route("/pages").post(pageController.testPage);

// PersonalInfo
router
  .route("/pages/1")
  .post(pageController.updatePersonal)
  .get(pageController.getPersonal);

// Education
router
  .route("/pages/2")
  .post(pageController.updateEducation)
  .get(pageController.getEducation);

// Interest
router
  .route("/pages/3")
  .post(pageController.updateInterest)
  .get(pageController.getInterest);

// ParentData
router
  .route("/pages/4")
  .post(pageController.updateParentData)
  .get(pageController.getParentData);

// UploadFile
router
  .route("/pages/5")
  .post(fileController.updateUploadFile)
  .get(fileController.getUploadFile);

// Question1
router
  .route("/pages/6")
  .post(questionController.updateQuestion1)
  .get(questionController.getQuestion1);
  
// Question2
router
  .route("/pages/7")
  .post(questionController.updateQuestion2)
  .get(questionController.getQuestion2);

module.exports = router;
