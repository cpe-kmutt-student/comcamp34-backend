const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllUser = async (req, res) => {
  try {
    const result = await prisma.register_data.findMany({});
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ status: false, message: err });
  }
};

exports.createUser = async (req, res) => {
  try {
    const body = req.body;
    const result = await prisma.register_data.create({
      data: {
        pname: body.pname,
        fname: body.fname,
        sname: body.sname,
      },
    });
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send({ status: false, message: err });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const body = req.body;
    const result = await prisma.register_data.update({
      where: {
        email: req.params.email,
      },
      data: {
        pname: body.pname,
        fname: body.fname,
        sname: body.sname,
      },
    });
    res.status(201).send({ status: "success", result: result });
  } catch (err) {
    res.status(500).send({ status: false, message: err });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const result = await prisma.register_data.delete({
      where: {
        email: req.params.email,
      },
    });
    res.status(200).send({ status: "success" });
  } catch (err) {
    res.status(500).send({ status: false, message: err });
  }
};
