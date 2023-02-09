const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
const jwt = require("jsonwebtoken");
const User = prisma.register_data;
const File = prisma.file;
const Question = prisma.question;

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

exports.generateToken = (uid) => {
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({ uid: uid }, secret, {
    expiresIn: 60 * 60 * 24, // 1 days
  });
  return token;
};
