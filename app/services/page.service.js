const userService = require("../services/user.service");
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
      page: 1,
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
      page: 2,
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
      page: 3,
      school_name: body.school_name,
      school_province: body.school_province,
      study_plan: body.study_plan,
      student_level: body.student_level,
      gpax: body.gpax,
      university_1: body.university_1,
      faculty_1: body.faculty_1,
      major_1: body.major_1,
      university_2: body.university_2,
      faculty_2: body.faculty_2,
      major_2: body.major_2,
      university_3: body.university_3,
      faculty_3: body.faculty_3,
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
      page: 4,
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
      page: 5,
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

exports.updateSubmit = async (uid) => {
  if (!uid) throw new Error("No Uid Provide");
  const res = await User.findUnique({
    where: {
      uid: uid,
    },
    include: {
      file: true,
      question: true,
    },
  });
  try {
    if (
      // Personal
      res.prefix.length &&
      res.firstname &&
      res.surname &&
      res.nickname &&
      res.birth_date &&
      res.mobile &&
      res.email &&
      res.province &&
      res.shirt_size &&
      res.travelby &&
      // Edu
      res.school_name &&
      res.school_province &&
      res.student_level &&
      res.study_plan &&
      res.gpax &&
      // Interest
      res.major_interest &&
      res.no_previous_camp &&
      // Parent
      res.parent_prefix &&
      res.parent_firstname &&
      res.parent_surname &&
      res.parent_mobile &&
      res.emergency_firstname &&
      res.emergency_surname &&
      res.emergency_relation &&
      res.emergency_mobile &&
      // File
      res.file[0].agreement_URL &&
      res.file[0].card_URL &&
      res.file[0].image_URL &&
      res.file[0].pp1_URL &&
      res.file[0].pp7_URL &&
      // Question
      res.question[0].q1 &&
      res.question[0].q2 &&
      res.question[0].q3 &&
      res.question[0].q4 &&
      res.question[0].q5 &&
      res.question[0].q6 &&
      res.question[0].q7
    ) {
      await User.update({
        where: {
          uid: uid,
        },
        data: {
          is_completed: true,
        },
      });
      return res;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
