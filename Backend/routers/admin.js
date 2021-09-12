const { Admin } = require("../models/admin");
const express = require("express");
const { generateToken, verify } = require("../utils/jwt");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    let admin = await Admin.findOne({ email: req.body.email });
    if (!admin) return res.send("Invalid email or password.");

    const validPassword = admin.password;
    if (req.body.password !== validPassword)
      return res.send("Invalid email or password.");

    const { _id, email } = admin;
    const token = generateToken({ id: _id, email });
    res.json({ token: token });

    console.log(token);
  } catch (err) {
    console.log("Error : ", err);
  }
});

router.post("/signup", async (req, res) => {
  let admin = await Admin.findOne({ email: req.body.email });
  if (admin) return res.status(400).send("User already registered.");

  admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
  });
  const result = await admin.save();
  res.status(200).send("Signup successfull");
});

router.get("/jwtToken", async (req, res) => {
  const { token } = req.headers;
  const isVerified = verify(token);
  res.json({ verfied: !!isVerified });
});

module.exports = router;
