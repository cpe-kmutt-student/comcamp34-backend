const userService = require("../services/user.service");

// validate submit login/submit
exports.createUser = async (req, res) => {
  try {
    // idToken from headers
    const idToken = req.headers["id-token"];
    if (!idToken) {
      res.status(403).send("No id-token Provide ");
    }

    const uid = await userService.validateIDToken(idToken);

    const user = await userService.getUserByUid(uid);

    // Create User
    if (!user) {
      const token = userService.generateToken(uid);
      await userService.createUser(uid);
      res.status(201).send({
        success: true,
        message: "User Created",
        page: 0,
        accessToken: token,
      });
    }
    if (user) {
      // Check Form Submitted
      if (user.is_completed == true) {
        res
          .status(208)
          .send({ success: false, message: "User Already Submitted Form" });
      } else {
        const token = userService.generateToken(uid);
        const page = await userService.getPage(uid);
        res.status(200).send({
          success: true,
          message: "Authenthicated",
          page: page,
          accessToken: token,
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: err });
  }
};
