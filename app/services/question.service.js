const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
const Question = prisma.question;

exports.updateQuestion1 = async (uid, body) => {
    const result = await Question.update({
        where:{
            uid:uid
        },
        data:{
            q1:body.q1,
            q2:body.q2,
            q3:body.q3,
        }
    });
    return result;
};

exports.getQuestion1 = async (uid, body) => {
    const result = await Question.findUnique({
        where:{
            uid:uid
        },
        select:{
            q1:true,
            q2:true,
            q3:true,
        }
    });
    return result;
};

exports.updateQuestion2 = async (uid, body) => {
    const result = await Question.update({
        where:{
            uid:uid
        },
        data:{
            q4:body.q4,
            q5:body.q5,
            q6:body.q6,
        }
    });
    return result;
};

exports.getQuestion2 = async (uid, body) => {
    const result = await Question.findUnique({
        where:{
            uid:uid
        },
        data:{
            q4:true,
            q5:true,
            q6:true,
        }
    });
    return result;
};