const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
const File = prisma.file;
exports.updateUploadFile = async (req, res) => {
    const result = await File.update({
        where:{
            uid:uid
        },
        data:{
            agreement:body.agreement_URL,
            card:body.card_URL,
            student_certificate:body.pp7_URL,
            gpax_paper:body.pp1_URL,
            image:body.image_URL,
        }
    });
    return result;
};

exports.getUploadFile = async (req, res) => {};