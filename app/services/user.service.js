const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
const jwt = require("jsonwebtoken");
const User = prisma.register_data;
const File = prisma.file;
const Question = prisma.question;
const admin = require("firebase-admin");

exports.validateIDToken = async (idToken) => {
  if (!idToken) throw new Error("No id-token ");
  // Firebase Validate Token
  try {
    const result = await admin.auth().verifyIdToken(idToken);
    return result.uid;
  } catch (error) {
    throw new Error("Validate Token Error");
  }
};

exports.getUserByUid = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  const user = await User.findFirst({
    where: {
      uid: uid,
    },
  });
  return user;
};

//Create uid in 3 Table
exports.createUser = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  const result = await User.create({
    data: {
      uid: uid,
    },
  });
  await Question.create({
    data: { uid: uid },
  });
  await File.create({
    data: { uid: uid },
  });
  return result;
};

exports.getPage = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  const result = await User.findUnique({
    where: {
      uid: uid,
    },
    select: {
      page: true,
    },
  });
  return result.page;
};

exports.generateToken = (uid) => {
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({ uid: uid }, secret, {
    expiresIn: 60 * 60 * 24, // 1 days
  });
  return token;
};
