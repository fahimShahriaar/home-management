const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../schemas/schemas");

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { name, mobile, password } = req.body;
    console.log(name, mobile, password);
    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    // save to DB
    const newUser = new User({
      name,
      mobile,
      password: hashedPassword,
    });

    const result = await newUser.save();

    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { mobile, password } = req.body;
    const user = await User.findOne({ mobile });
    // console.log(user);
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        res
          .status(200)
          .json({ success: true, result: "Loggedin successfully!" });
      } else {
        res
          .status(401)
          .json({ success: false, result: "Authentication failed!" });
      }
    } else {
      res
        .status(401)
        .json({ success: false, result: "You are not valid user!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, error });
  }
});

module.exports = router;
