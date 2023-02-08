const pageService = require("../services/page.service");

exports.testPage = (req, res) => {
  const id = req.uid;
  console.log(id);
  res.status(200).send("test Pages");
};

exports.updatePersonalInfo = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updatePersonal(uid, body);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.getPersonalInfo = async (req, res) => {};

exports.updateEducation = async (req, res) => {};

exports.getEducation = async (req, res) => {};
