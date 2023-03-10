const confirmService = require("../services/confirm.service");

exports.result = async (req, res) => {
  res.status(200).send(":) What do you want to do? huh");
};

exports.whitelistChecker = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await confirmService.whitelistChecker(uid);
    const result2 = await confirmService.tableCreateChecker(uid);
    if(result && !result2){
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

exports.updateExamination1 = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await confirmService.updateExamination1(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.getExamination1 = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await confirmService.getExamination1(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.updateExamination2 = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await confirmService.updateExamination2(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.getExamination2 = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await confirmService.getExamination2(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.updateExamination3 = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await confirmService.updateExamination3(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.getExamination3 = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await confirmService.getExamination3(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.updateExamination4 = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await confirmService.updateExamination4(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.getExamination4 = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await confirmService.getExamination4(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.updateExamination5 = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await confirmService.updateExamination5(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.getExamination5 = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await confirmService.getExamination5(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};




exports.submit = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await confirmService.updateSubmit(uid);
    if (result) {
      const count = await confirmService.countSubmitted();
      confirmService.sendDiscordHook(uid,result, count);
      res.status(200).send({ success: true, data: result });
    } else {
      res.status(405).send({ success: false, message: "User not valid Form" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

