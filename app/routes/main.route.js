const controller = require("../controller/main.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/test", controller.test);
  app.post("/api/hello", controller.hello);
  app.post("/api/testprisma", controller.prismatest);
  app.post("/api/createprisma", controller.createprisma);
};