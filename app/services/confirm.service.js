const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Whitelist = prisma.whitelist;

exports.whitelistChecker = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  const result = await Whitelist.findUnique({
    where: {
      uid: uid,
    },
    select: {
      uid: true,
    },
  });
  return result;
};

exports.updateConfirmation = async (uid, body) => {
  const result = await Confirm.update({
    where: {
      uid: uid,
    },
    data: {
      isConfirm: body.isConfirm,
      // shirt_size: body.shirt_size,
      // describeTravel: body.describeTravel,
      // describeBackhome: body.describeBackhome,
      // transaction_Name: body.transaction_Name,
      // transaction_URL: body.transaction_URL,
      // transaction_date: body.transaction_date,
      // transaction_hours: body.updateConfirmation,
      // transaction_minutes: body.transaction_minutes,
    },
  });
  return result;
};
exports.getConfirmation = async (uid) => {
  const result = await Confirm.findUnique({
    where: {
      uid: uid,
    },
    select: {
      isConfirm: true,
      shirt_size: true,
      describeTravel: true,
      describeBackhome: true,
      transaction_Name: true,
      transaction_URL: true,
      transaction_date: true,
      transaction_hours: true,
      transaction_minutes: true,
    },
  });
  return result;
};
