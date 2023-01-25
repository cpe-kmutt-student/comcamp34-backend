const sql = require("./connect.js");
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

exports.prismatest = (req, res) => {
  prisma.register_data
    .findMany({
      include: {
        file: true,
        question: true,
      },
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err });
      return;
    });
};

exports.createprisma = (req, res) => {
  const { firstName, lastName } = req.body;
  prisma.register_data
    .create({
      data: {
        fname: firstName,
        sname: lastName,
      },
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err });
      return;
    });
};

exports.hello = (req, res) => {
  res.status(200).send("Hello");
};
