const userService = require("../services/user.service");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Question = prisma.question;
const User = prisma.register_data;

const checkPage = async (uid, bodyPage) => {
  const page = await userService.getPage(uid);
  let currentPage = page;
  if (bodyPage > page) {
    currentPage = bodyPage;
  }
  return currentPage;
};
exports.updateQuestion1 = async (uid, body) => {
  const currentPage = await checkPage(uid, 7);
  await User.update({
    where: {
      uid: uid,
    },
    data: { page: currentPage },
  });
  const result = await Question.update({
    where: {
      uid: uid,
    },
    data: {
      q1: body.q1,
      q2: body.q2,
      q3: body.q3,
    },
  });
  return result;
};

exports.getQuestion1 = async (uid) => {
  const result = await Question.findUnique({
    where: {
      uid: uid,
    },
    select: {
      q1: true,
      q2: true,
      q3: true,
    },
  });
  return result;
};

exports.updateQuestion2 = async (uid, body) => {
  const result = await Question.update({
    where: {
      uid: uid,
    },
    data: {
      q4: body.q4,
      q5: body.q5,
      q6: body.q6,
      q7: body.q7,
    },
  });
  return result;
};

exports.getQuestion2 = async (uid) => {
  const result = await Question.findUnique({
    where: {
      uid: uid,
    },
    select: {
      q4: true,
      q5: true,
      q6: true,
      q7: true,
    },
  });
  return result;
};
