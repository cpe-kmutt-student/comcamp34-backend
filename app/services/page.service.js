const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
const User = prisma.register_data;
const File = prisma.file;
const Question = prisma.question;

exports.updatePersonal = async (uid, body) => {
  const result = await User.update({
    where: {
      uid: uid,
    },
    data: {
      prefix: body.prefix,
      firstname: body.firstname,
      middlename: body.middlename,
      surname: body.surname,
      nickname: body.nickname,
      birth_date: body.birth_date,
      mobile: body.mobile,
      email: body.email,
      province: body.province,
      email: body.email,
      provice: body.provice,
      shirt_size: body.shirt_size,
      notebook: body.notebook,
      allergic_food: body.allergic_food,
    },
  });
  return result;
};
