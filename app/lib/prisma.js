const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
const User = prisma.register_data;
const File = prisma.file;
const Question = prisma.question;

export default User