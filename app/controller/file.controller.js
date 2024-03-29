const fileService = require("../services/file.service");

exports.updateUploadFile = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await fileService.updateUploadFile(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

exports.getUploadFile = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await fileService.getUploadFile(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
