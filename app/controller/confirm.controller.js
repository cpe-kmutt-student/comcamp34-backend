const confirmService = require("../services/confirm.service");

exports.x = async (req, res) => {
  res.status(200).send(":) What do you want to do? huh");
};

exports.updateConfirmation = async (res, req) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await confirmService.updateConfirmation(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.getConfirmation = async (res, req) => {
  try {
    const uid = req.uid;
    const result = await confirmService.getConfirmation(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.submit = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};
