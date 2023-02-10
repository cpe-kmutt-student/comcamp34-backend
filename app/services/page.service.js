const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const User = prisma.register_data;

exports.updateConsent = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  const result = await User.update({
    where: {
      uid: uid,
    },
    data: {
      consent: true,
    },
  });
  return result;
};

exports.getConsent = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  const result = await User.findUnique({
    where: {
      uid: uid,
    },
    select: {
      consent: true,
    },
  });
  return result;
};

exports.updatePersonal = async (uid, body) => {
  if (!uid) throw new Error("No Uid Provide");
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
      medicine: body.medicine,
      allergic_medicine: body.allergic_medicine,
      underlying: body.underlying,
      travelby: body.travelby,
      shirt_size: body.shirt_size,
      allergic_food: body.allergic_food,
      special: body.special,
      notebook: body.notebook,
    },
  });
  return result;
};

exports.getPersonal = async (uid) => {
  const result = await User.findFirst({
    where: {
      uid: uid,
    },
    select: {
      prefix: true,
      firstname: true,
      middlename: true,
      surname: true,
      nickname: true,
      birth_date: true,
      mobile: true,
      email: true,
      province: true,
      medicine: true,
      allergic_medicine: true,
      underlying: true,
      travelby: true,
      shirt_size: true,
      allergic_food: true,
      special: true,
      notebook: true,
    },
  });
  return result;
};

exports.updateEducation = async (uid, body) => {
  const result = await User.update({
    where: {
      uid: uid,
    },
    data: {
      school_name: body.school_name,
      school_province: body.school_province,
      study_plan: body.study_plan,
      student_level: body.student_level,
      gpax: body.gpax,
      university_1: body.university_1,
      facalty_1: body.facalty_1,
      major_1: body.major_1,
      university_2: body.university_2,
      facalty_2: body.facalty_2,
      major_2: body.major_2,
      university_3: body.university_3,
      facalty_3: body.facalty_3,
      major_3: body.major_3,
    },
  });
  return result;
};

exports.getEducation = async (uid) => {
  const result = await User.findFirst({
    where: {
      uid: uid,
    },
    select: {
      school_name: true,
      school_province: true,
      study_plan: true,
      student_level: true,
      gpax: true,
      university_1: true,
      faculty_1: true,
      major_1: true,
      university_2: true,
      faculty_2: true,
      major_2: true,
      university_3: true,
      faculty_3: true,
      major_3: true,
    },
  });
  return result;
};

exports.updateInterest = async (uid, body) => {
  const result = await User.update({
    where: {
      uid: uid,
    },
    data: {
      comcamp_previous: body.comcamp_previous,
      major_interest: body.major_interest,
      reason_major_interest: body.reason_major_interest,
      camp_1: body.camp_1,
      camp_2: body.camp_2,
      camp1_by: body.camp1_by,
      camp2_by: body.camp2_by,
      no_previous_camp: body.no_previous_camp,
    },
  });
  return result;
};

exports.getInterest = async (uid) => {
  const result = await User.findUnique({
    where: {
      uid: uid,
    },
    select: {
      comcamp_previous: true,
      major_interest: true,
      reason_major_interest: true,
      camp_1: true,
      camp_2: true,
      camp1_by: true,
      camp2_by: true,
      no_previous_camp: true,
    },
  });
  return result;
};

exports.updateParentData = async (uid, body) => {
  const result = await User.update({
    where: {
      uid: uid,
    },
    data: {
      parent_prefix: body.parent_prefix,
      parent_firstname: body.parent_firstname,
      parent_middlename: body.parent_middlename,
      parent_surname: body.parent_surname,
      parent_relation: body.parent_relation,
      parent_mobile: body.parent_mobile,
      parent_email: body.parent_email,
      same_parent: body.same_parent,
      emergency_prefix: body.emergency_prefix,
      emergency_firstname: body.emergency_firstname,
      emergency_middlename: body.emergency_middlename,
      emergency_surname: body.emergency_surname,
      emergency_relation: body.emergency_relation,
      emergency_mobile: body.emergency_mobile,
      emergency_email: body.emergency_email,
    },
  });
  return result;
};

exports.getParentData = async (uid) => {
  const result = await User.findFirst({
    where: {
      uid: uid,
    },
    select: {
      parent_prefix: true,
      parent_firstname: true,
      parent_middlename: true,
      parent_surname: true,
      parent_relation: true,
      parent_mobile: true,
      parent_email: true,
      same_parent: true,
      emergency_prefix: true,
      emergency_firstname: true,
      emergency_middlename: true,
      emergency_surname: true,
      emergency_relation: true,
      emergency_mobile: true,
      emergency_email: true,
    },
  });
  return result;
};
