const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const admin = require("firebase-admin");
const cors = require("cors");

// Initial Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(require("./comcamp-34-secret.json")),
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send("NodeJS Server is running");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

require("./app/routes/main.route.js")(app);
app.use(require("./app/routes"));
