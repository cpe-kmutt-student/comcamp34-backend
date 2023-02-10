const userService = require("../services/user.service");

// validate submit login/submit
exports.createUser = async (req, res) => {
  try {
    const uid = req.params.uid;
    const user = await userService.getUserByUid(uid);

    // Create User
    if (!user) {
      const token = userService.generateToken(uid);
      await userService.createUser(uid);
      res
        .status(201)
        .send({ success: true, message: "User Created", accessToken: token });
    }
    if (user) {
      // Check Form Submitted
      if (user.is_completed == true) {
        res
          .status(503)
          .send({ success: false, message: "User Already Submitted Form" });
      } else {
        const token = userService.generateToken(uid);
        res.status(200).send({
          success: true,
          message: "Authenthicated",
          accessToken: token,
        });
      }
    }
  } catch (err) {
    // console.log(err);
    res.status(500).send({ success: false, message: err });
  }
};

