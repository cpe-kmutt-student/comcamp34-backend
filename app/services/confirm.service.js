const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Whitelist = prisma.whitelist;
const Examination = prisma.examination;
const Confirmation = prisma.confirmation;

exports.whitelistChecker = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  const result =await Whitelist.findUnique({
    where: {
      uid: uid,
    },
    select: {
      uid: true,
    },
  });

  return result;
};

exports.isSubmit = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  const result = await Confirmation.findUnique({
    where: {
      uid: uid,
    },
    select: {
      is_completed: true,
    },
  });
  return result;
};

exports.tableCreateChecker = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  const result = await Confirmation.findUnique({
    where: {
      uid: uid,
    },
    select: {
      uid: true,
    },
  });
  return result;
};

exports.createData = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  await Confirmation.create({
    data: {
      uid: uid,
    },
  });
  await Examination.create({
    data: {
      uid: uid,
    },
  });
};

exports.updateConfirmation = async (uid, body) => {
  const result = await Confirmation.update({
    where: {
      uid: uid,
    },
    data: {
      isConfirm: body.isConfirm,
      shirt_size: body.shirt_size,
      describeTravel: body.describeTravel,
      describeBackhome: body.describeBackhome,
      transaction_Name: body.transaction_Name,
      transaction_URL: body.transaction_URL,
      transaction_date: body.transaction_date,
      transaction_hours: body.updateConfirmation,
      transaction_minutes: body.transaction_minutes,
    },
  });
  return result;
};

exports.getConfirmation = async (uid) => {
  const result = await Confirmation.findUnique({
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
      is_completed:true,
    },
  });
  return result;
};

exports.updateExamination1 = async (uid, body) => {
  const result = await Examination.update({
    where: {
      uid: uid,
    },
    data: {
      q1_1: body.q1_1,
      reason_q1_1: body.reason_q1_1,
      q1_2: body.q1_2,
      reason_q1_2: body.reason_q1_2,
      q1_3: body.q1_3,
      reason_q1_3: body.reason_q1_3,
    },
  });
  return result;
};

exports.getExamination1 = async (uid) => {
  const result = await Examination.findUnique({
    where: {
      uid: uid,
    },
    select: {
      q1_1: true,
      reason_q1_1: true,
      q1_2: true,
      reason_q1_2: true,
      q1_3: true,
      reason_q1_3: true,
    },
  });
  return result;
};

exports.updateExamination2 = async (uid, body) => {
  const result = await Examination.update({
    where: {
      uid: uid,
    },
    data: {
      q2_1: body.q2_1,
      q2_2: body.q2_2,
      q2_3: body.q2_3,
    },
  });
  return result;
};

exports.getExamination2 = async (uid) => {
  const result = await Examination.findUnique({
    where: {
      uid: uid,
    },
    select: {
      q2_1: true,
      q2_2: true,
      q2_3: true,
    },
  });
  return result;
};

exports.updateExamination3 = async (uid, body) => {
  const result = await Examination.update({
    where: {
      uid: uid,
    },
    data: {
      q3_1: body.q3_1,
      q3_2: body.q3_2,
    },
  });
  return result;
};

exports.getExamination3 = async (uid) => {
  const result = await Examination.findUnique({
    where: {
      uid: uid,
    },
    select: {
      q3_1: true,
      q3_2: true,
    },
  });
  return result;
};

exports.updateExamination4 = async (uid, body) => {
  const result = await Examination.update({
    where: {
      uid: uid,
    },
    data: {
      q4_1: body.q4_1,
      q4_2: body.q4_2,
    },
  });
  return result;
};

exports.getExamination4 = async (uid) => {
  const result = await Examination.findUnique({
    where: {
      uid: uid,
    },
    select: {
      q4_1: true,
      q4_2: true,
    },
  });
  return result;
};

exports.updateExamination5 = async (uid, body) => {
  const result = await Examination.update({
    where: {
      uid: uid,
    },
    data: {
      q5_1: body.q5_1,
      q5_2: body.q5_2,
      q5_3: body.q5_3,
    },
  });
  return result;
};

exports.getExamination5 = async (uid) => {
  const result = await Examination.findUnique({
    where: {
      uid: uid,
    },
    select: {
      q5_1: true,
      q5_2: true,
      q5_3: true,
    },
  });
  return result;
};
