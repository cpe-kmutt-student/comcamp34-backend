const confirmService = require("../services/confirm.service");

exports.result = async (req, res) => {
  res.status(200).send(":) What do you want to do? huh");
};

exports.whitelistChecker = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await confirmService.whitelistChecker(uid);
    const result2 = await confirmService.tableCreateChecker(uid);
    if(result !== null && result2 === null){
     await confirmService.createData(uid);
    }
    res.status(200).send({ success: true, data : result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.updateConfirmation = async (req, res) => {
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

exports.getConfirmation = async (req, res) => {
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
