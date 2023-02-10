const pageService = require("../services/page.service");

exports.testPage = (req, res) => {
  const id = req.uid;
  // console.log(id);
  res.status(200).send("test Pages");
};
exports.updateConsent = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await pageService.updateConsent(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};
exports.getConsent = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await pageService.getConsent(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
exports.updatePersonal = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updatePersonal(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.getPersonal = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await pageService.getPersonal(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.updateEducation = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updateEducation(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.getEducation = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await pageService.getEducation(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.updateInterest = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updateInterest(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.getInterest = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await pageService.getInterest(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.updateParentData = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updateParentData(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.getParentData = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await pageService.getParentData(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
