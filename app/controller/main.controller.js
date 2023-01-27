const sql = require("../connect.js");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.test = (req, res) => {
  sql.query(
    "SELECT * FROM register_data INNER JOIN file ON register_data.id = file.user_id INNER JOIN question ON register_data.id = question.user_id",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: err });
        return;
      }
      res.send(result);
    }
  );
};

exports.prismatest = async (req, res) => {
  try {
    const result = await prisma.register_data.findMany({
      include: {
        file: true,
        question: true,
      },
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.createprisma = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const result = prisma.register_data.create({
      data: {
        fname: firstName,
        sname: lastName,
      },
    });
    res.send(result);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.hello = (req, res) => {
  res.status(200).send("Hello");
};
