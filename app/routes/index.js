const authJwt = require("../middleware/authJwt");

const router = require("express").Router();

// If want to use Versioning the API
const api = process.env.apiVersion || "/api";
router.use(`${api}`, require("./user.route"));
router.use(`${api}`, authJwt.verifyToken, require("./page.route"));

module.exports = router;
