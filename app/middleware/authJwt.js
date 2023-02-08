const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const User = prisma.register_data;
// Thanks Code from Thanaphol
verifyToken = (req, res, next) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("Please Define JWT_SECRET");
  }
  let token = req.headers["access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No Token provided!",
    });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.uid = decoded.uid;
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken,
};

module.exports = authJwt;
