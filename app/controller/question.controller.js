const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const questionService = require("../services/question.service");

exports.updateQuestion1 = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await questionService.updateQuestion1(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.getQuestion1 = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await questionService.getQuestion1(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.updateQuestion2 = async (req, res) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await questionService.updateQuestion2(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.getQuestion2 = async (req, res) => {
  try {
    const uid = req.uid;
    const result = await questionService.getQuestion2(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
