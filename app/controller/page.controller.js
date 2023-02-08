const pageService = require("../services/page.service");

exports.testPage = (req, res) => {
  const id = req.uid;
  console.log(id);
  res.status(200).send("test Pages");
};

exports.updatePersonal = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updatePersonal(uid, body);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.getPersonal = async (req, res) => {};

exports.updateEducation = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updateEducation(uid, body);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.getEducation = async (req, res) => {};

exports.updateInterest = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updateInterest(uid, body);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.getInterest = async (req, res) => {};

exports.updateParentData = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updateParentData(uid, body);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.getParentData = async (req, res) => {};

