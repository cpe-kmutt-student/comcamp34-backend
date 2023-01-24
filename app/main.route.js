const controller = require("./main.controller.js");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })

    app.post ("/api/test", controller.test);
    app.post ("/api/prismatest", controller.prismatest);
}