const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const File = prisma.file;

exports.updateUploadFile = async (uid, body) => {
  const result = await File.update({
    where: {
      uid: uid,
    },
    data: {
      image_URL: body.image_URL,
      image_Name: body.image_Name,
      agreement_URL: body.agreement_URL,
      agreement_Name: body.agreement_Name,
      card_URL: body.card_URL,
      card_Name: body.card_Name,
      pp7_URL: body.pp7_URL,
      pp7_Name: body.pp7_Name,
      pp1_URL: body.pp1_URL,
      pp1_Name: body.pp1_Name,
    },
  });
  return result;
};

exports.getUploadFile = async (uid) => {
  const result = await File.findUnique({
    where: {
      uid: uid,
    },
    select: {
      image_URL: true,
      image_Name: true,
      agreement_URL: true,
      agreement_Name: true,
      card_URL: true,
      card_Name: true,
      pp7_URL: true,
      pp7_Name: true,
      pp1_URL: true,
      pp1_Name: true,
    },
  });
  return result;
};
