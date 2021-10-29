const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../schemas/todoSchema");
const User = new mongoose.model("User", userSchema);
//-------------------------------------------------------GET ALL THE TODOS
router.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({
      message: "signup was  successfull",
    });
  } catch {
    res.status(500).json({
      message: "signup failed",
    });
  }
});

module.exports = router;
